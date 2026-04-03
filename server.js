const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", function (req, res) {
  res.send("Server is running");
});

app.post("/login", function (req, res) {
  const { identifier, password } = req.body;

  console.log("Identifier:", identifier);
  console.log("Password:", password);

  res.send("Login route working");
});

app.listen(3000, function () {
  console.log("Server running on http://localhost:3000");
});
