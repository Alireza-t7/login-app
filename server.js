const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static(__dirname));

app.post("/login", function (req, res) {
  const { identifier, password } = req.body;

  console.log("Identifier:", identifier);
  console.log("Password:", password);

  res.send("Login route working");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
  console.log(`Server running on port ${PORT}`);
});
