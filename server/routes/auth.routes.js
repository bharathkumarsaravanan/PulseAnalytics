const express = require("express");
const Router = express.Router();
const jwt = require("jsonwebtoken");

const user = {
    email: "admin@example.com",
    password: "123456"
};
const JWT_SECRET = "yoursecretkeysample";

Router.post("/login", (req, res) => {
  const { email, password } = req.body;

  // validate input
  if (!email || !password) {
    return res.status(400).json({
      success: false,
      error: "Email and password required",
    });
  }

  if (email === user.email && password === user.password) {
    const token = jwt.sign({email}, JWT_SECRET, {
        expiresIn: "10m"
    });
    return res.status(200).json({
      success: true,
      message: "Authentication successful!",
      token: token
    });
  }

  return res.status(401).json({
    success: false,
    error: "Invalid credentials",
  });
});

module.exports = Router;