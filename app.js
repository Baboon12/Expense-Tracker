const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
dotenv.config({ path: "./config.env" });
const app = express();

const dbURI = process.env.DATABASE;
const port = process.env.PORT || 5000;

app.use(express.static("public"));
app.use(express.json());
app.use(cookieParser());

mongoose
    .connect(dbURI)
    .then((result) => {
        app.listen(port);
        console.log("connected to mongodb and listening at port 5000");
    })
    .catch((err) => console.error(err));

app.get("*", function (req, res) {
    console.log('HI');
});