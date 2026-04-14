const express = require("express");
const Router = express.Router();
const jwt = require("jsonwebtoken");
require('dotenv').config();


const user = {
    email: "admin@example.com",
    password: "123456"
};
const JWT_SECRET = process.env.ACCESS_SECRET;
const REFRESH_SECRET = process.env.REFRESH_SECRET;

Router.post("/login", (req, res) => {
  const { email, password } = req.body;
    console.log(email, password, JWT_SECRET)
  // validate input
  if (!email || !password) {
    return res.status(400).json({
      success: false,
      error: "Email and password required",
    });
  }
  console.log(JWT_SECRET);
  if (email === user.email && password === user.password) {
    const token = jwt.sign({userId: "123", email}, JWT_SECRET, {
        expiresIn: "10m"
    });
    const refreshToken = jwt.sign({userId: "123", email}, REFRESH_SECRET, {
        expiresIn: "7d"
    });

    res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days\
        secure: true, // HTTPS only in production
        sameSite: "strict" // CSRF protection
    });

    res.cookie("accessToken", token);
    res.cookie("role", "admin");
    
    return res.status(200).json({
      success: true,
      message: "Authentication successful!"
    });
  }

  return res.status(401).json({
    success: false,
    error: "Invalid credentials",
  });
});

Router.post("/refresh", (req, res) => {
    const refreshToken = req.cookies.refreshToken;
    console.log("refresh token", refreshToken, req.headers.cookie, req.cookies  );
    if (!refreshToken) {
        return res.status(401).json({
            success: false,
            error: "Refresh token missing"
        });
    }
    jwt.verify(refreshToken, REFRESH_SECRET, (err, decoded) => {
        if (err) {
            return res.status(403).json({
                success: false,
                error: "Invalid refresh token"
            });
        }
        // Generate a new access token
        const newToken = jwt.sign({userId: decoded.userId, email: decoded.email}, JWT_SECRET, {
            expiresIn: "10m"
        });

        res.cookie("accessToken", newToken);
        res.cookie("role", "admin");
        console.log(newToken)
        return res.json({
            success: true,
            message: "New token has generated!"
        });
    });
});

Router.post("/logout", (req, res) => {
    res.clearCookie("refreshToken", { secure: true, sameSite: "strict" });
    res.clearCookie("accessToken");
    res.clearCookie("role");

    return res.status(200).json({
        success: true,
        message: "Logged out successfully"
    })
});

module.exports = Router;