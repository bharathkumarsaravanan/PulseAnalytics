const express = require("express");
const app = express();
const authRoutes = require("./routes/auth.routes");
const dashboardRoutes = require("./routes/dashboard.routes");
const settingsRoutes = require("./routes/settings.routes");
const campaignsRoutes = require("./routes/campaigns.routes");
const eventsRoutes = require("./routes/events.routes");
const cookieParser = require("cookie-parser");
const cors = require("cors");
require('dotenv').config();
const connectDB = require("./db/connect");

connectDB();

app.use(cors({
  origin: (origin, callback) => callback(null, origin || true),
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type"],
  credentials: true
}));
// app.use((req, res, next) => {
//   console.log("REQ:", req.method, req.url);
//   next();
// });
app.use(express.json());
app.use(cookieParser());
app.use((req, res, next) => {
  // console.log("Incoming request:", req.method, req.url);
  // console.log("Headers:", req.headers);
  next();
});

app.use("/auth", authRoutes);
app.use("/dashboard", dashboardRoutes);
app.use("/settings", settingsRoutes);
app.use("/campaigns", campaignsRoutes);
app.use("/events", eventsRoutes);


app.get("/", (req, res) => {
    res.send("API running");
});

app.listen(5000, () => {
    console.log("Server is running on port 5000");
})