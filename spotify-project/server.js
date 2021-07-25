const express = require("express");
const bodyParser = require("body-parser");
var SpotifyWebApi = require("spotify-web-api-node");
const path = require("path");
const app = express();
const clientId = "1d4bffd843d947aab1b856c945689236";
const clientSecret = "c1e1ba60fd20414898058ffc9f066daf";
const redirectUri = "http://localhost:5000/";
const axios = require("axios");
const qs = require("query-string");
var spotifyApi = new SpotifyWebApi({
  clientId: "1d4bffd843d947aab1b856c945689236",
  clientSecret: "c1e1ba60fd20414898058ffc9f066daf",
  redirectUri: "http://www.example.com/callback",
});

app.use(express.static(path.join(__dirname, "build")));
app.use(bodyParser.json({ limit: "10mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));

app.use(
  "/",
  function (req, res, callback) {
    callback();
  },
  express.static(path.join(__dirname, "build", "index.html"))
);
app.post("/preToken", async function (req, res) {
  const code = req.body.code;
  const headers = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded",
    },
    auth: {
      username: clientId,
      password: clientSecret,
    },
  };
  const data = {
    grant_type: "authorization_code",
    code,
    redirect_uri: "http://localhost:5000/",
  };

  axios
    .post(`https://accounts.spotify.com/api/token`, qs.stringify(data), headers)
    .then((response) => {
      const { access_token } = response.data;
      spotifyApi.setAccessToken(access_token);
      console.log(access_token);

      axios({
        method: "get",
        url: "https://api.spotify.com/v1/me/top/tracks",
        headers: { Authorization: "Bearer " + access_token },
      })
        .then(function (res) {
          const topTracks = res.data.items.map((items) => {
            const container = {};
            container.songid = items.id;
            container.songname = items.name;
            container.artistsname = items.artists[0].name;

            return container;
          });
         //console.log(topTracks);
          return topTracks;
        })
        .then(function (res) {
          const trackid = items.id;
          console.log(trackid);
          const encodedIds = encodeURIComponent(res.toString());

          axios({
            method: "get",
            url: `https://api.spotify.com/v1/audio-features?ids=${encodedIds}`,
            headers: { Authorization: "Bearer " + access_token },
          })
            .then((response) => {
              const moods = response.data.audio_features.map((audio_features) => {
                let valenceScore = audio_features.valence;

                if (valenceScore < 0.3){
                  return 'Sad';
                }
                else if (valenceScore < 0.69){
                  return 'Chill';
                }
                else if (valenceScore < 0.8){
                  return 'Upbeat';
                }
                else {
                  return 'Happy';
                }
              })
              
              console.log(moods)
              return  idTracks;
            })
            .catch((err) => {
              console.log(err);
            });
            return trackid;
        });
    });
});

app.get("/login", function (req, res) {
  var scopes = "user-read-private user-read-email user-top-read";
  res.redirect(
    "https://accounts.spotify.com/authorize" +
      "?response_type=code" +
      "&client_id=" +
      clientId +
      (scopes ? "&scope=" + encodeURIComponent(scopes) : "") +
      "&redirect_uri=" +
      encodeURIComponent(redirectUri)
  );
});

app.listen(5000, () => {
  console.log("server started on port 5000");
});
