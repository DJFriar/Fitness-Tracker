require("dotenv").config();
const express = require("express");
const logger = require("morgan");
const mongojs = require("mongojs");
const mongoose = require("mongoose");
const path = require("path");

const PORT = process.env.PORT || 3000;

const User = require("./models/models");
const app = express();
app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
    useNewUrlParser: true,
    useFindAndModify: false,
});


app.use(require("./routes/html-routes"));
app.use(require("./routes/api-routes.js"));

app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
});