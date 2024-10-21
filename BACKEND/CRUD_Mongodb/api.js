const mongoose = require("mongoose");
const dotenv = require("dotenv");
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

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

const userModel = require("./userModel");

const signUpHandler = async (req, res) => {
  try {
    const userObject = req.body;
    if (!userObject.email || !userObject.password) {
      return res.status(400).json({
        message: "email and password required",
        status: "failure",
      });
    } 
    const user = await userModel.findOne({ email: userObject.email });
    if (user) {
      return res.status(400).json({
        message: "user already logged in",
        status: "success",
      });
    } 
      // Create new user
      const newUser = await userModel.create(userObject);
      return res.status(201).json({
        message: "user created successfully",
        newUser: newUser,
      });
    
  } catch (err) {
    // Handle any unexpected errors
    return res.status(500).json({
      message: err,
    });
  }
};


//  for auth token
const jwt = require("jsonwebtoken");
const util = require("util");
const promisify = util.promisify;
const promisdiedJWTsign = promisify(jwt.sign);

const loginHandler = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    
    if (!user) {
      return res.status(404).json({
        message: "invalid email",
        status: "failure",
      });
    }

    // console.log("password",password);
    // console.log("user password",user.password);
    
    const areEqual = password == user.password;
    if (!areEqual) {
      return res.status(401).json({
        message: "invalid password",
        status: "failure",
      });
    }

    //  create token
    const authToken = await promisdiedJWTsign(
      { id: user["_id"] },
      process.env.JWT_SECRET_KEY
    );
     res.cookie("jwt", authToken, {
      maxAge: 1000 * 60 * 60 * 24,
      httpOnly: true,
    });
     return res.status(200).json({
        message: "success fully generate the jwt token",
        status: "success",
        user: user,
      });
  } catch (err) {
     res.status(500).json({
      message:err,
    });
  }
};

// middleware
app.use(express.json());
app.use(cookieParser());
// routes
app.post("/users", createUser);
app.get("/user", getAlluser);
app.get("/user/:id", getUserById);
app.delete("/user/:id", deleteUserById);
app.post("/movies", addMovies);

app.post("/sign", signUpHandler);
app.post("/login", loginHandler);

app.listen(3000, function () {
  console.log("server started on port 3000");
});
