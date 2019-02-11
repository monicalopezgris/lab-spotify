const express = require('express');
const SpotifyWebApi = require('spotify-web-api-node');

const router = express.Router();

// SPOTIFY API

// Remember to insert your credentials here
const clientId = /* ID */ ;
const clientSecret = /* SECRET */;

const spotifyApi = new SpotifyWebApi({
  clientId,
  clientSecret,
});

// Retrieve an access token
spotifyApi
  .clientCredentialsGrant()
  .then((data) => {
    spotifyApi.setAccessToken(data.body.access_token);
  })
  .catch((error) => {
    console.log('Something went wrong when retrieving an access token', error);
  });

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index');
});

// GET ARTIST
router.get('/artist', (req, res, next) => {
  const { artist } = req.query;
  spotifyApi.searchArtists(artist)
    .then((data) => {
      const artists = data.body.artists.items;
      res.render('artists', { artists });
    })
    .catch((err) => {
      next('The error while searching artists occurred: ', err);
    });
});

// GET ALBUMS
router.get('/albums/:artistID', (req, res, next) => {
  const { artistID } = req.params;
  spotifyApi.getArtistAlbums(artistID)
    .then((data) => {
      const albums = data.body.items;
      res.render('albums', { albums });
    })
    .catch((err) => {
      next('The error while searching artists occurred: ', err);
    });
});

// GET TRACK LIST

router.get('/tracks/:albumID', (req, res, next) => {
  const { albumID } = req.params;
  spotifyApi.getAlbumTracks(albumID)
    .then((data) => {
      const tracks = data.body.items;
      res.render('tracks', { tracks });
    })
    .catch((err) => {
      next('The error while searching artists occurred: ', err);
    });
});

module.exports = router;
