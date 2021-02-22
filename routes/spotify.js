const express = require('express');
const axios = require('axios')
const router = express.Router();
require('dotenv').config({path: "./config.env"});



router.get('/', (req, res) => {

    const CLIENT = process.env.CLIENT_ID;
    const SECRET = process.env.CLIENT_SECRET;


   const token = req.query.token;
   const playlist_id = req.query.playlist_id;

   axios(`https://api.spotify.com/v1/playlists/${playlist_id}/tracks`, {
    method:'GET',
    headers:{
        'Authorization': 'Bearer '+ token,
    }
}).then((response) => {
    const data= response.data;
    res.send(data);
})   
.catch ((error) => {
// console.log(error)
})
})

module.exports = router;
