const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
//app.use("/api/auth", require("./routes/auth"));


// Middleware
app.use(cors());
app.use(express.json());

// Serve frontend files from "public" folder
app.use(express.static(path.join(__dirname, "public")));

// APIs
app.post("/api/auth/register", (req, res) => {
  const { username, email, password } = req.body;
  console.log("Register request:", username, email, password);
  res.json({ msg: "User registered successfully" });
});

app.post("/api/auth/login", (req, res) => {
  const { email, password } = req.body;
  console.log("Login request:", email, password);
  res.json({ token: "dummy-jwt-token" });
});

// Fallback → if route not found, send index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "SIH.html"));
});

// Start server
app.listen(5000, () => {
  console.log("✅ Server running at http://localhost:5000");
});