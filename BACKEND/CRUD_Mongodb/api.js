const mongoose = require("mongoose");
const dotenv = require("dotenv");
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const authRouter = require("./Router/authRouter");
const movieRouter = require("./Router/movieRouter");
const userRouter = require("./Router/userRouter");

dotenv.config({ path: "./.env" });
const dbLink = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.2zfal.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

mongoose
  .connect(dbLink)
  .then(function (connection) {
    console.log("connected to db");
  })
  .catch((err) => console.log(err));

// middleware
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/movie", movieRouter);

app.listen(3000, function () {
  console.log("server started on port 3000");
});
