require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

// Root Route
app.get("/", (req, res) => {
  res.json({
    message: "🚀 Express API Starter is running",
    author: "Devesh Sharma"
  });
});

// Health Check Route
app.get("/api/health", (req, res) => {
  res.json({
    status: "OK",
    uptime: process.uptime()
  });
});

// Example POST Route
app.post("/api/data", (req, res) => {
  res.json({
    received: req.body,
    message: "Data received successfully"
  });
});

// 404 Handler
app.use((req, res) => {
  res.status(404).json({
    error: "Route not found"
  });
});

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
