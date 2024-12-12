const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config({ path: "./.env" });

const dblink = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@jioclone.cj7cx.mongodb.net/?retryWrites=true&w=majority&appName=jioClone`;

mongoose
  .connect(dblink)
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.error("DB connection error:", err.message);
  });

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
