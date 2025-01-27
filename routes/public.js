const express = require("express");
const publicRouter = express.Router();
const {registerUser,Login} = require("../controllers/register")


// register user
publicRouter.post("/signup", registerUser);

publicRouter.post("/login",Login);



module.exports = publicRouter
