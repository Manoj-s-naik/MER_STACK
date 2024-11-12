const mongoose = require("mongoose");
const dotenv = require("dotenv");
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const userModel = require("./userModel");
const jwt = require("jsonwebtoken");
const util = require("util");
const promisify = util.promisify;
const promisdiedJWTsign = promisify(jwt.sign);
const emailSender = require("./dynamicEmailSender");

dotenv.config({ path: "./.env" });
const dbLink = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.2zfal.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
mongoose
  .connect(dbLink)
  .then(function (connection) {
    console.log("connected to db");
  })
  .catch((err) => console.log(err));

app.use(express.json());
app.use(cookieParser());

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
      message: err.message,
    });
  }
};

const otpGenerator = () => {
  return Math.floor(100000 + Math.random() * 900000);
};

const forgetPasswordHandler = async (req, res) => {
  /****
   * 1. user send the email : extract email
   * 2. check if email is present in DB (user)
   * if email is not present -> send a response to the user(user not found)
   * *  if email is present ->
   * 3. create basic otp ->
   *        * user  ke saath token map krdo
   *        *  send to the email
   * 4. url -> reset url -> id
   *
   * ***/
  try {
    const Email = req.body.email;
    console.log(Email);

    if (Email == undefined) {
      return res.status(400).json({
        message: "email is required",
      });
    }
    const user = await userModel.findOne({ email: Email });
    console.log(user);

    if (user == null) {
      return res.status(401).json({
        message: "cannot find user by this email",
      });
    }
    const otp = otpGenerator();
    user.otp = otp;
    user.otpExpiry = Date.now() + 1000 * 60 * 10;
    await user.save({ validateBeforeSave: false });
    res.status(200).json({
      message: "successfully otp generated ",
      status: "success",
      otp: otp,
      resetUrl: `http://localhost:3000/api/auth/resetPassword/${user["_id"]}`,
    });
    const templateData = {name : user.name, otp:user.otp}
    await emailSender("./templates/otp.html",user.email,templateData)
  } catch (err) {
    res.status(500).json({
      message: " internal server error",
      error: err.message,
    });
  }
};

async function resetPasswordHandler(req, res) {
  try {
      /**
       * 1. id ,  id
       * 2. if otp , password , confirmPassword are present
       *      *  otp should n't be expires
       *      * otp compare -> if matches
       *      *  password update
       *      *  re-route them to login page
       * ***/
      let resetDetails = req.body;
      // required fields are there or not 
      if (!resetDetails.password || !resetDetails.confirmPassword
          || !resetDetails.otp
          || resetDetails.password != resetDetails.confirmPassword) {
          res.status(401).json({
              status: "failure",
              message: "invalid request"
          })
      }
      const userId = req.params.userId;
      const user = await userModel.findById(userId);
      // if user is not present
      if (user == null) {
          return res.status(404).json({
              status: "failure",
              message: "user not found"
          })
      }
      // if otp is not present  in db user
      if (user.otp == undefined) {
          return res.status(401).json({
              status: "failure",
              message: "unauthorized acces to reset Password"
          })
      }

      // if otp is expired
      if (Date.now() > user.otpExpiry) {
          return res.status(401).json({
              status: "failure",
              message: "otp expired"
          })
      }
      // if otp is incorrect
      if (user.otp != resetDetails.otp) {
          return res.status(401).json({
              status: "failure",
              message: "otp is incorrect"
          })
      }
      user.password = resetDetails.password;
      user.confirmPassword = resetDetails.confirmPassword;
      // remove the otp from the user
      user.otp = undefined;
      user.otpExpiry = undefined;
      await user.save();
      res.status(200).json({
          status: "success",
          message: "password reset successfully"
      })

  } catch (err) {
      console.log("err", err);
      res.status(500).json({
          message: err.message,
          status: "failure"
      })
  }
}


app.post("/api/auth/sign", signUpHandler);
app.post("/api/auth/login", loginHandler);
app.patch("/api/auth/forgetPassword", forgetPasswordHandler);
app.patch("/api/auth/resetPassword/:userId", resetPasswordHandler);

app.listen(3000, function () {
  console.log("server started on port 3000");
});
