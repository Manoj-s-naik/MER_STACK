const userModel = require("./userModel");
const movieModel = require("./moviesModel");

const createUser = async function (req, res) {
  try {
    const userObject = req.body;
    const user = await userModel.create(userObject);
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({
      message: "internal server error",
      error: err,
    });
  }
};

const addMovies = async (req, res) => {
  try {
    const movieObject = req.body;
    const movie = await movieModel.create(movieObject);
    res.status(200).json(movie);
  } catch (err) {
    res.status(500).json({
      message: "internal server  error",
      error: err,
    });
  }
};

const getAlluser = async (req, res) => {
  try {
    const user = req.user;
    if (user.role === "admin" || user.role === "moderator") {
      const allUser = await userModel.find();
      return res.status(200).json({
        message: "users",
        users: allUser,
        status: "success",
      });
    } else {
      return res.status(404).json({
        message: "you dont have any access",
        status: "failure",
      });
    }
  } catch (err) {
    res.status(500).json({
      status: "internal error",
      message: err.message,
    });
  }
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await userModel.findById(id);
    if (!user) {
      res.status(404).json({
        message: "user not found",
      });
    }
    res.status(200).json({
      message: user,
    });
  } catch (err) {
    res.status(500).json({
      message: "internal error",
    });
  }
};

const deleteUserById = async (req, res) => {
  try {
    const User = req.user;
    const { uID } = req.body;
    if (User.role !== "admin" && User.role !== "moderator") {
      return res.status(403).json({
        message: "You don't have permission to delete a any user.",
        status: "failure",
      });
    }
    const validUser = await userModel.findById(uID);
    if (!validUser) {
      return res.status(404).json({
        message: "user not found",
        status: "failure",
      });
    }
    if (validUser.role !== "user") {
      return res.status(403).json({
        message: "You  have to delete only user.",
        status: "failure",
      });
    }
    const deleteUser = await userModel.findByIdAndDelete(uID);
    return res.status(200).json({
      message: "user deleted successfully.",
      deletedUser: deleteUser,
      status: "success",
    });
  } catch (err) {
    res.status(500).json({
      message: "internal error",
      error: err.message,
    });
  }
};

module.exports = {
  createUser,
  addMovies,
  getAlluser,
  deleteUserById,
  getUserById,
};
