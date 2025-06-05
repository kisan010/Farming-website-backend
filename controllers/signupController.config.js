const User = require("../model/authSchema");
const jwt = require("jsonwebtoken");



const signUpuserData = async (req, res) => {
  try {
    const { email, password, repassword } = req.body;
      console.log(email,password,repassword)
    if (password !== repassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    const userExists = await User.findOne({ email });
    if (userExists) return res.status(400).json({ message: "Email already in use" });

    const user = await User.create({ email, password });

    res.status(201).json({

      user: {
        _id: user._id,
        email: user.email
      }
    });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

module.exports = { signUpuserData };
