const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "build", "index.html"));
  });
  
  app.listen(5000, () => {
    console.log("server started on port 5000");
  });