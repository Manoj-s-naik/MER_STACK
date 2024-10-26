const express = require("express");
const movieRouter = express.Router();

const {viewAllMovies,addMovies} = require("../Controllers/movieController");
const {protectedRouteMiddleware,checkRoleandAccess} = require("../Controllers/authController");


movieRouter
    .post("/movie", addMovies)
    .get("/movies", protectedRouteMiddleware, checkRoleandAccess, viewAllMovies);

module.exports= movieRouter;