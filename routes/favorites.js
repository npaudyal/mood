const express = require('express');
const router = express.Router();
const User = require('../models/User')
const mongoose = require('mongoose');
var ObjectId = require('mongodb').ObjectID;


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

router.post('/removeMovies', (req, res) => {
    const {title} = req.body;
    if(!title)  {
        return res.status(400).json({msg: 'Error getting title'});
    }
    User.findByIdAndUpdate(
        req.body.userId, { $pull: { "movies": { 'title': title } } }, { safe: true, upsert: true },
        function(err) {
            if (err) { console.log(err) }
            return res.json(title);
        })
    
    })


    router.post('/removeMusic', (req, res) => {
        const {title} = req.body;
        if(!title)  {
            return res.status(400).json({msg: 'Error getting title'});
        }
        User.findByIdAndUpdate(
            req.body.userId, { $pull: { "music": { 'title': title } } }, { safe: true, upsert: true },
            function(err) {
                if (err) { console.log(err) }
                return res.json(title);
            })
        
        })
        

        router.post('/removeBooks', (req, res) => {
            const {title} = req.body;
            if(!title)  {
                return res.status(400).json({msg: 'Error getting title'});
            }
            User.findByIdAndUpdate(
                req.body.userId, { $pull: { "books": { 'title': title } } }, { safe: true, upsert: true },
                function(err) {
                    if (err) { console.log(err) }
                    return res.json(title);
                })
            
            })
            
    

router.get('/getBooks',  (req, res) => {

    var id = req.query.userId;
    id = ObjectId(id)
   
    
    User.findById(id)
        .then(user =>res.json(user.books));
});

router.get('/getMusic',  (req, res) => {
    
    id =  mongoose.Types.ObjectId(req.query.userId );
    
    User.findById(id)
        .then(user =>res.json(user.music));
});

router.get('/getMovies',  (req, res) => {
    
    id =  mongoose.Types.ObjectId(req.query.userId );
   
    
    User.findById(id)
        .then(user =>res.json(user.movies));
});

module.exports = router;