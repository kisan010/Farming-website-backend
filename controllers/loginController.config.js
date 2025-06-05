const User = require("../model/authSchema");
const jwt = require("jsonwebtoken");

const loginuserData = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "User not found" });

    const isMatch = await user.matchPassword(password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials" });
    console.log("Email:", email);
    console.log("Password Entered:", password);
    console.log("User From DB:", user);
    console.log("DB Hashed Password:", user.password);

    console.log("Password Match:", isMatch);

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
      
    res.status(200).json({
      token: token ,
      user: {
        _id: user._id,
        email: user.email,
      },
    });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

module.exports = { loginuserData };
