const express = require("express");
const protect = require("../middleware/protectRoutemiddleware.js");
const userRouter = express.Router();

userRouter.get("/user", protect, (req, res) => {
  // You can return user info from decoded token
  res.json({
    message: "Authenticated",
    user: req.user, // This is set in protect middleware
  });
});

module.exports = userRouter;
