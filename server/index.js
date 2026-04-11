const express = require("express");
const app = express();
const authRoutes = require("./routes/auth.routes");
const dashboardRoutes = require("./routes/dashboard.routes");
const settingsRoutes = require("./routes/settings.routes");
const cookieParser = require("cookie-parser");
const cors = require("cors");
require('dotenv').config();

app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}));
app.use(express.json());
app.use(cookieParser());
app.use((req, res, next) => {
  console.log("Incoming request:", req.method, req.url);
  console.log("Headers:", req.headers);
  next();
});

app.use("/auth", authRoutes);
app.use("/dashboard", dashboardRoutes);
app.use("/settings", settingsRoutes);


app.get("/", (req, res) => {
    res.send("API running");
});

app.listen(5000, () => {
    console.log("Server is running on port 5000");
})