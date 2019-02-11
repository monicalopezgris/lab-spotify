const express = require('express');

const router = express.Router();

/* GET users listing. */

router.post('/', (req, res, next) => {
  const { artist } = req.body;
  console.log(artist);
  // spotifyApi.searchArtists(artist)
  //   .then((data) => {
  //     console.log('The received data from the API: ', data.body);
  //   // ----> 'HERE WHAT WE WANT TO DO AFTER RECEIVING THE DATA FROM THE API'
  //   })
  //   .catch((err) => {
  //     console.log('The error while searching artists occurred: ', err);
  //   });
});

module.exports = router;
