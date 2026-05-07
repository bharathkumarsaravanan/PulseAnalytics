const mongoose = require("mongoose");
require("dotenv").config();

async function connectDB() {
  try {
    if (mongoose.connection.readyState >= 1) return;

    await mongoose.connect(process.env.MONGO_URL);
    console.log("✅ MongoDB connected", mongoose.connection.name);
  } catch (er) {
    console.log("❌ DB connection error:", er);
  }
}

module.exports = connectDB;