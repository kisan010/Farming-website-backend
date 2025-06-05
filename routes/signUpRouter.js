


const express = require("express");
const signUprouter = express.Router();
const signupController = require("../controllers/signupController.config.js");



signUprouter.post("/",signupController.signUpuserData);

module.exports = signUprouter;
