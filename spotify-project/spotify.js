var SpotifyWebApi = require('spotify-web-api-node');


var spotifyApi = new SpotifyWebApi({
  clientId: '1d4bffd843d947aab1b856c945689236',
  clientSecret: 'c1e1ba60fd20414898058ffc9f066daf',
  redirectUri: 'http://www.example.com/callback'
});

spotifyApi.clientCredentialsGrant().then(
    function(data) {
      console.log('The access token expires in ' + data.body['expires_in']);
      console.log('The access token is ' + data.body['access_token']);
      spotifyApi.setAccessToken(data.body['access_token']);
      spotifyApi.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE').then(
        function(data) {
          console.log('Artist albums', data.body);
        },
        function(err) {
          console.error(err);
        }
      );
     
    },
    function(err) {
      console.log('Something went wrong when retrieving an access token', err);
    }
  );

  


