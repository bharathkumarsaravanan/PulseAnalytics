const express = require('express');
const Router = express.Router();
const verifyAccessToken = require("../middlewares/verifyAccessToken");

Router.get('/states', verifyAccessToken, (req, res) => {
  console.log(req.user);
  return res
    .status(200)
    .json({
      success: true,
      data: { users: 120, revenue: '$3,200', growth: '12%' }
    });
});

module.exports = Router;