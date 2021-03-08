const express = require('express');
const router = express.Router();
const User = require('../models/User')

router.post('/addBooks', (req, res) => {

    const {title, image} = req.body;
    if(!title)  {
        return res.status(400).json({msg: 'Error getting title'});
    }

    User.findById(req.body.userId).then((record) => {

        record.books.push({title:title, image:image});
        record.save();
        res.json(record.books);
    
    })

})

router.post('/addMusic', (req, res) => {

    const {title, image, url} = req.body;
    
    if(!title)  {
        return res.status(400).json({msg: 'Error getting title'});
    }

    User.findById(req.body.userId).then((record) => {

        record.music.push({title:title, image:image, url:url});
        record.save();
        res.json(record.music);
    
    })

})

router.post('/addMovies', (req, res) => {

    const {title, image} = req.body;
    if(!title)  {
        return res.status(400).json({msg: 'Error getting title'});
    }

    User.findById(req.body.userId).then((record) => {

        record.movies.push({title:title, image:image});
        record.save();
        res.json(record.movies);
    
    })

})

router.get('/getBooks',  (req, res) => {
    
    User.findById(req.query.userId)
        .then(user =>res.json(user.books));
});

router.get('/getMusic',  (req, res) => {
    
    User.findById(req.query.userId)
        .then(user =>res.json(user.music));
});

router.get('/getMovies',  (req, res) => {
    
    User.findById(req.query.userId)
        .then(user =>res.json(user.movies));
});

module.exports = router;