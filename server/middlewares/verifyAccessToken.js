const jwt = require("jsonwebtoken");
require('dotenv').config();

const JWT_SECRET = process.env.ACCESS_SECRET;


const verifyAccessToken = (req, res, next) => {
    try {
        const token = req.cookies.accessToken;
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded;
        next();
    } catch (er) {
        if (er?.name == "TokenExpiredError") {
            return res.status(401).json({
                success: false,
                message: "Token Expired"
            });
        }

        return res.status(401).json({
            success: false,
            message: "Invalid Token"
        })
    }
}

module.exports = verifyAccessToken;