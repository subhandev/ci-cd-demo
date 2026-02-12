const express = require("express");

const app = express();

// Required — do NOT fallback to 3000 in container world
const PORT = process.env.PORT || 3000;

// Environment comes from ECS task definition
const ENV = process.env.NODE_ENV;

// Root route (used by prod TG)
app.get("/", (req, res) => {
  res.json({
    message: "Hello from CI/CD demo",
    environment: ENV
  });
});

// Dev route (used by /dev path rule in ALB)
app.get("/dev", (req, res) => {
  res.json({
    message: "Hello from DEV",
    environment: ENV
  });
});

// Health check (used by Target Group)
app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT} in ${ENV} mode`);
});

module.exports = app;