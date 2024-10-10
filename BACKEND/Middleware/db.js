const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({path: "./Middleware/.env"})
const dbLink = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.2zfal.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

mongoose.connect(dbLink)
    .then(function (connection) {
        console.log("connected to db");
    }).catch(err => console.log(err))

