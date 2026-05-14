const express = require("express");
const next = require("next");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const connectDB = require("./server/db/connect");

const authRoutes = require("./server/routes/auth.routes");
const dashboardRoutes = require("./server/routes/dashboard.routes");
const settingsRoutes = require("./server/routes/settings.routes");
const campaignsRoutes = require("./server/routes/campaigns.routes");
const eventsRoutes = require("./server/routes/events.routes");

const dev = process.env.NODE_ENV !== "production";

const nextApp = next({
  dev,
  dir: "./client",
});

const handle = nextApp.getRequestHandler();

connectDB();

nextApp.prepare().then(() => {
  const app = express();

  app.use(express.json());
  app.use(cookieParser());

  /*
   =========================
   API ROUTES
   =========================
  */

  app.use("/api/auth", authRoutes);
  app.use("/api/dashboard", dashboardRoutes);
  app.use("/api/settings", settingsRoutes);
  app.use("/api/campaigns", campaignsRoutes);
  app.use("/api/events", eventsRoutes);

  /*
   =========================
   NEXT.JS HANDLER
   =========================
  */

  app.use((req, res) => {
    return handle(req, res);
  });

  const PORT = process.env.PORT || 3000;

  app.listen(PORT, () => {
    console.log(`🚀 Server running on port:${PORT}`);
  });
});