const express = require("express");
const bodyParser = require("body-parser");
var SpotifyWebApi = require('spotify-web-api-node');
const path = require("path");
const app = express();
const clientId = '1d4bffd843d947aab1b856c945689236';
const clientSecret = 'c1e1ba60fd20414898058ffc9f066daf';
const redirectUri = 'http://localhost:5000/';
const axios = require('axios');
const qs = require('query-string');
var spotifyApi = new SpotifyWebApi({
  clientId: '1d4bffd843d947aab1b856c945689236',
  clientSecret: 'c1e1ba60fd20414898058ffc9f066daf',
  redirectUri: 'http://www.example.com/callback'
});

app.use(express.static(path.join(__dirname, "build")));
app.use(bodyParser.json({ limit: "10mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));

app.use("/", function (req, res,callback) {
  console.log("*****");
  console.log('code: ' + req.query.code);
  callback();
},
express.static(path.join(__dirname, "build", "index.html")));
 // res.sendFile(path.join(__dirname, "/build", "index.html")));



/*
app.get("/", function (req, res) {
    console.log("*****");
    // console.log('code: ' + req.query.code);
    res.sendFile(path.join(__dirname, "/build", "index.html"));
  });
  */

  app.post("/preToken", async function (req, res) {
    const code = req.body.code;
    const headers = {
      headers: {
       Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      auth: {
        username: clientId,
        password: clientSecret,
      },
    };
    const data = {
      grant_type: 'authorization_code',
      code,
      redirect_uri: "http://localhost:5000/"
    };
  
    // const serverpost = {
    //   grant_type: "authorization_code",
    //   code,
    //   client_id: clientId,
    //   client_secret: clientSecret,
    //   redirect_uri: redirectUri
    // };

   // https://accounts.spotify.com/api/token body: { grant_type, code, client_id}
   // https://accounts.spotify.com/api/token?grant_type=authorization_code&code=1y2727272&
    console.log("server has received", code);
    axios.post(`https://accounts.spotify.com/api/token`,qs.stringify(data), headers)
      .then(response => {
        const {access_token} = response.data;
        spotifyApi.setAccessToken(access_token);
        spotifyApi.getMe()
        .then(function(data) {
          console.log('Some information about the authenticated user', data.body);
        }, function(err) {
          console.log('Something went wrong!', err);
        });
      

          
       /* spotifyApi.getAudioAnalysisForTrack('3Qm86XLflmIXVm1wcwkgDK')
        .then(function(data) {
        }, function(err) {
          done(err);
          });
          */
        return res.json(response.data);
      }).catch(err => {
       console.log("error", err);
      })
      
      
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