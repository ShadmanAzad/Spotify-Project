const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const clientId = '1d4bffd843d947aab1b856c945689236';
const redirectUri = 'http://www.example.com/callback';


app.use(express.static(path.join(__dirname, "build")));

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "/build", "index.html"));
  });

  app.get("/test", function (req, res) {
    res.send(200);
  });

app.get('/login', function(req, res){
  var scopes = 'user-read-private user-read-email';
  res.redirect('https://accounts.spotify.com/authorize' +
  '?response_type=code' +
  '&client_id=' + clientId +
  (scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
  '&redirect_uri=' + encodeURIComponent(redirectUri));
});
  
  app.listen(5000, () => {
    console.log("server started on port 5000");
  });