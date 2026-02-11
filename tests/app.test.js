const request = require("supertest");
const express = require("express");

const app = express();
app.get("/", (req, res) => {
  res.send("Hello v1");
});

test("GET / returns Hello v1", async () => {
  const res = await request(app).get("/");
  expect(res.text).toBe("Hello v1");
});