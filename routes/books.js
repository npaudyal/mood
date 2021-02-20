const express = require('express');
const axios = require('axios')
const router = express.Router();
require('dotenv').config({path: "./config.env"});



router.get('/', (req, res) => {

    const name = req.query.book_name;
    const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${name}+novels&maxResults=40&key=${process.env.BOOKS_API}`;


    axios.get(apiUrl)
    .then(response => {
      const data = response.data;
     
      res.send(data);
    }) 
    
    .catch(err => {
        console.log(err.message)
    });

})

module.exports = router;
