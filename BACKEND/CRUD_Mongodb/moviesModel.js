const mongoose = require("mongoose");
const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  discription: {
    type: String,
    required: true,
  },
  releaseYear: {
    type: Number,
    required: true,
  },
  genre: {
    type: String,
    enum: [
      "Drama",
      "Comedy",
      "Action",
      "Thriller",
      "Horror",
      "Romance",
      "Sci-Fi",
      "Animation",
      "Documentary",
      "Other",
    ],
    required: true,
  },
  rating: {
    type: Number,
    minlength: 5,
  },
  cast: {
    type: [String],
  },
  director: {
    type: String,
  },
  thumbnail: {
    type: String,
  },
  trailerLink: {
    type: String,
  },
  isPremium: {
    type: Boolean,
    default: false,
  },
});

const movieModel = mongoose.model("movies", movieSchema);

module.exports = movieModel;
