const express = require('express');
const authRouter = express.Router();

const { signUpHandler,loginHandler,protectedRouteMiddleware,validIsAdmin,profileHandler,logoutHandler } = require("../Controllers/authController");

authRouter
    .post("/sign", signUpHandler)
    .post("/login", loginHandler)
    .get("/profile", protectedRouteMiddleware, validIsAdmin, profileHandler)
    .post("/logout", logoutHandler)

module.exports = authRouter;