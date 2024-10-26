const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Movie title is required."],
  },
  description: {
    type: String,
    required: [true, "Movie description is required."],
  },
  releaseYear: {
    type: Number,
    required: [true, "Release year is required."],
    min: [1888, "Release year cannot be before 1888."], 
  },
  genre: {
    type: String,
    enum: {
      values: [
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
      message: "Genre must be one of the specified values.",
    },
    required: [true, "Movie genre is required."],
  },
  rating: {
    type: Number,
    min: [0, "Rating cannot be less than 0."],
    max: [5, "Rating cannot exceed 5."],
  },
  cast: [String],
  
  director: {
    type: String,
    required: [true, "Director name is required."],
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
