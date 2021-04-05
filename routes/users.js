const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
//User model
const User = require('../models/User')

router.post('/', (req,res) => {
   const {name, email, password} = req.body;

   if(!name || !email || !password)  {
       return res.status(400).json({msg: 'Please enter all fields'});
   }

   //Check for existing
   User.findOne({email}).then(user => {
       if(user) {
           return res.status(400).json({msg:"User already exists!"})
       }
       const newUser = new User({
           name, email, password
       });

       //Create salt and hash
       bcrypt.genSalt(10, (err, salt) => {
           bcrypt.hash(newUser.password, salt, (err,hash) => {
               if(err) throw err;
               newUser.password = hash;
               newUser.save().then(user => {

                jwt.sign({id:user.id}, 
                    process.env.JWT_SECRET,
                    {expiresIn:3600}, 
                    (err, token) => {
                        if(err) throw err;
                        res.json({
                            token,
                            user:{
                                id:user.id,
                                email:user.email,
                                name:user.name,
                                register_date:user.register_date
                            }
                        })
                    }
                    )
                   
               })
           })
       })
   })
})

router.post('/editName', (req,res) => {
    const {name, email} = req.body;
    
 
    if(!name)  {
        return res.status(400).json({msg: 'Please enter name'});
    }
 
    //Check for existing
    User.updateOne({email}, {$set: {name}}).then(user => {
            res.json(name);
    })
      
       
 })


module.exports = router;