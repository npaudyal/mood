const mongoose = require('mongoose');
const crypto = require('crypto');
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken')

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
    register_date:{
        type:Date,
        default:Date.now,
    },
    
});

const User = mongoose.model('user', UserSchema);

module.exports = User;