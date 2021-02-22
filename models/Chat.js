const mongoose = require('mongoose');


const chatSchema = new mongoose.Schema({
    message: {
        type: String
    },
  
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'
        
    },
   type:{
       type:String
   },
  

    
}, {timestamps:true});

const Chat = mongoose.model('Chat', chatSchema);

module.exports = Chat;