const express = require("express");
const cors = require("cors");
const path = require("path");
const fs = require("fs");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

function getUsers() {
  const data = fs.readFileSync(path.join(__dirname, "users.json"), "utf-8");
  return JSON.parse(data);
}

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/login", function (req, res) {
  const { identifier, password } = req.body;

  const users = getUsers();

  const user = users.find(
    (u) => u.username === identifier || u.email === identifier
  );

  if (!user) {
    return res.send("User not found");
  }

  if (user.password !== password) {
    return res.send("Wrong password");
  }

  return res.send("You are logged in");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
  console.log(`Server running on port ${PORT}`);
});
