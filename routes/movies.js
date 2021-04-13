const express = require('express');
const axios = require('axios')
const router = express.Router();
require('dotenv').config({path: "./.env"});



router.get('/', (req, res) => {

    const API = process.env.MOVIE_API

  

    const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${API}&with_genres=${req.query.with_genres}&page=${req.query.page}`;


    axios.get(apiUrl)
    .then(response => {
      const data = response.data;
      
      res.send(data);
    }) 
    
    .catch(err => {
        console.log(err)
    });

})

module.exports = router;
