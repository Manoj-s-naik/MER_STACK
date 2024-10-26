const userModel = require("../Models/userModel");
const jwt = require("jsonwebtoken");
const util = require("util");
const promisify = util.promisify;
const promisdiedJWTsign = promisify(jwt.sign);
const promisdiedJWTverify = promisify(jwt.verify);

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
    if (!loggedInuser) {
      return res.status(404).json({
        message: "user not found",
        status: "failure",
      });
    }
    if (loggedInuser.role == "user") {
      return res.status(401).json({
        message: "user role is not have access",
        status: "failure",
      });
    }
    next();
  } catch (err) {
    console.log("error", err);
    return res.status(500).json({
      message: "an error occured",
      status: "failure",
      error: err,
    });
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

const checkRoleandAccess = async (req, res, next) => {
  try {
    const uID = req.id;
    const user = await userModel.findById(uID);
    if (!user) {
      return res.status(404).json({
        message: "user not found",
      });
    }
    if (!user.role) {
      return res.status(400).json({
        message: "user role not found found",
      });
    }
    req.user = user;
    next();
  } catch (error) {
    return res.status(500).json({
      message: "internal error",
      error: error,
    });
  }
};

const logoutHandler = (req, res) => {
  try {
    res.clearCookie("jwt", { path: "/" });
    res.json({
      message: "logout successfully",
      status: "success",
    });
  } catch (error) {
    res.status(500).json({
      message: "internal error",
    });
  }
};
module.exports = {
  signUpHandler,
  loginHandler,
  protectedRouteMiddleware,
  validIsAdmin,
  profileHandler,
  logoutHandler,
  checkRoleandAccess,
};
