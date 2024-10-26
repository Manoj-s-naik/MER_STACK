const movieModel = require("../Models/moviesModel");

const viewAllMovies = async (req, res) => {
  try {
    const user = req.user;
    console.log("role", user.role);

    if (
      user.role !== "admin" &&
      user.role !== "moderator" &&
      user.role !== "fee curator"
    ) {
      return res.status(404).json({
        message: "you dont have access",
        status: "failure",
      });
    } else {
      const allMovies = await movieModel.findOne();
      return res.status(200).json({
        message: "movies found ",
        movies: allMovies,
        status: "success",
      });
    }
  } catch (err) {
    res.status(404).json({
      message: "there is some issues",
      status: "failure",
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

module.exports = {
  viewAllMovies,
  addMovies,
};
