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
    const user = await userModel.find();
    if (user.length != 0) {
      res.status(200).json({
        message: user,
      });
    } else {
      res.status(404).json({
        message: "there is no users",
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
  const { id } = req.params;
  try {
    const user = await userModel.findByIdAndDelete(id);
    if (user === null) {
      res.status(404).json({
        message: "user id is not present",
      });
    } else {
      res.status(200).json({
        message: "user is delete successfully",
        user: user,
      });
    }
  } catch (err) {
    res.status(500).json({
      message: "internal error",
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
