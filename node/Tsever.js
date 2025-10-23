// server.js
const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Serve files from "public"
app.use(express.static(path.join(__dirname, "public")));

// Serve my.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname,"my.html"));
});

app.listen(PORT, () => {
  console.log(`✅ Express server running at http://localhost:${PORT}`);
});