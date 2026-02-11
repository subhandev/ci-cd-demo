const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;
const ENV = process.env.NODE_ENV || "development";

app.get("/", (req, res) => {
  res.json({
    message: "Hello from CI/CD demo",
    environment: ENV
  });
});

app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`App running on port ${PORT} in ${ENV} mode`);
  });
}
module.exports = app;