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
const { error } = require("console");
const promisify = util.promisify;
const promisdiedJWTsign = promisify(jwt.sign);
const promisdiedJWTverify = promisify(jwt.verify);

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
      message: err,
    });
  }
};

const protectedRouteMiddleware = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      return res.status(400).json({
        message: "token is not there unauthorize access",
        status: "failure",
      });
    }
    // varify the token after call the next
    const dycryptedToken = await promisdiedJWTverify(
      token,
      process.env.JWT_SECRET_KEY
    );
    // token identifier
    req.id = dycryptedToken.id;
    next();
  } catch (err) {
    return res.status(500).json({
      message: "internal error",
      error: err,
    });
  }
};

const validIsAdmin = async (req, res, next) => {
  const userId = req.id;
  try {
    const loggedInuser = await userModel.findById(userId);
    if(!loggedInuser){
    return res.status(404).json({
      message : "user not found",
      status : "failure"
    })
  } 
  if(loggedInuser.role == "user"){
    return res.status(401).json({
      message : "user role is not have access",
      status : "failure"
    })
  }
  // if(loggedInuser.role !== "admin"){
  //   res.status(404).json({
  //     message : "sorry you are not a admin you dont have any access",
  //     status : "failure"
  //   })
  // }
  next()
 }
  catch(err) {
    console.log("error",err);
    return res.status(500).json({
      message : "an error occured",
      status : "failure",
      'error' : err
    })
  }
};

const profileHandler = async (req, res) => {
  try {
    const userId = req.id;
    const user = await userModel.findById(userId);
    if (!userId) {
      return res.status(400).json({
        message: "there is no profile is there for this id",
        status: "success",
      });
    }
    return res.status(200).json({
      message: "profile found",
      user: user,
    });
  } catch (err) {
    return res.status(500).json({
      message: "internal error",
      error: err,
    });
  }
};

const logoutHandler = (req,res)=>{
 try {
  res.clearCookie("jwt",{path:"/"});
  res.json({
    message : "logout successfully",
    status : "success"
  })
 } catch (error) {
  res.status(500).json({
    message : "internal error"
  })
 }
}

// middleware
app.use(express.json());
app.use(cookieParser());
// routes
// routes
app.post("/users", createUser);
app.get("/user", getAlluser);
app.get("/user/:id", getUserById);
app.delete("/user/:id", deleteUserById);
app.post("/movies", addMovies);
app.post("/sign", signUpHandler);
app.post("/login", loginHandler);
app.get("/profile", protectedRouteMiddleware, validIsAdmin, profileHandler);
app.post("/logout",logoutHandler)

app.listen(3000, function () {
  console.log("server started on port 3000");
});
