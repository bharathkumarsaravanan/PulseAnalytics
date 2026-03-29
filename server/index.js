const express = require("express");
const app = express();
const authRoutes = require("./routes/auth.routes");

app.use(express.json());
app.use("/auth", authRoutes);


app.get("/", (req, res) => {
    res.send("API running");
});

app.listen(5000, () => {
    console.log("Server is running on port 5000");
})