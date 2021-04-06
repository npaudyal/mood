const mongoose = require('mongoose');
const crypto = require('crypto');
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken')


const BookSchema = new mongoose.Schema({
    title:String,
    image:String
})

const MusicSchema = new mongoose.Schema({
    title:String,
    image:String,
    url:String
})
const MoviesSchema = new mongoose.Schema({
    title:String,
    image:String
})


const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide a Name"]
    },
    email: {
       type: String,
       required: [true, "Please provide an email"],
       unique:true,
       match:[
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
        "Please provide a valid email!"

       ] 
    },
    password: {
        type: String,
        required: [true, "Please provide a password"],
        minLength:6,
        
    },
    role:{
        type: String,
        default:'user',
        enum:["user", "admin"],
    },
    image:String,
    music:[MusicSchema],
    movies:[MoviesSchema],
    books:[BookSchema],
    register_date:{
        type:Date,
        default:Date.now,
    },
    
});

const User = mongoose.model('User', UserSchema);

module.exports = User;