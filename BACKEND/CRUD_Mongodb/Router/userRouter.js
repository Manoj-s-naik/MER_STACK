const express =  require("express");
const userRouter = express.Router();

const {createUser,getAlluser,deleteUserById,getUserById,} = require("../Controllers/userController");
const {protectedRouteMiddleware,checkRoleandAccess} = require("../Controllers/authController");

userRouter
    .post("/users", createUser)
    .get("/user/:id", getUserById)
    .delete("/user/:id", protectedRouteMiddleware, checkRoleandAccess, deleteUserById)
    .get("/users", protectedRouteMiddleware, checkRoleandAccess, getAlluser)

module.exports = userRouter;