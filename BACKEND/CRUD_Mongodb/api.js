const mongoose = require("mongoose");
const dotenv = require("dotenv");
const express = require("express");
const app = express();

dotenv.config({ path: "./.env" });
const dbLink = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.2zfal.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

mongoose
  .connect(dbLink)
  .then(function (connection) {
    console.log("connected to db");
  })
  .catch((err) => console.log(err));

const {
  createUser,
  addMovies,
  getAlluser,
  deleteUserById,
  getUserById,
} = require("./userController");

// middleware
app.use(express.json());
// routes
app.post("/users", createUser);
app.get("/user", getAlluser);
app.get("/user/:id", getUserById);
app.delete("/user/:id", deleteUserById);
app.post("/movies", addMovies);

app.listen(3000, function () {
  console.log("server started on port 3000");
});
