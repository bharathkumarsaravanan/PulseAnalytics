const express = require("express");
const Router = express.Router();
const verifyAccessToken = require("../middlewares/verifyAccessToken");

Router.get("/get-user", verifyAccessToken, (req, res) => {
    
    return res.status(200).json({
        success: true,
        user: {
            name: "Bharath",
            email: "bharathsaravananofficial@gmail.com"
        }
    })
})

Router.post("/add-user", verifyAccessToken, (req, res) => {
    const { name, email } = req.body;

    console.log({name, email});

    return res.status(200).json({
        success: true,
        message: "user added successfully!"
    });
})

module.exports = Router;