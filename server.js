const path = require('path');
require('dotenv').config({path: "./config.env"});
const express = require('express');
const connectDB = require('./config/db')
const cors = require('cors')
const Chat = require('./models/Chat');
const auth = require('./middleware/auth');
const multer = require('multer');
const fs = require('fs');
//Connect DB

connectDB();

const app = express();
app.use(cors());

const server1 = require('http').createServer(app);
const io = require('socket.io')(server1, {
    cors:{
        origin:"*",
    }
})


app.use(express.json());

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
      cb(null, `${Date.now()}_${file.originalname}`)
    },
    // fileFilter: (req, file, cb) => {
    //   const ext = path.extname(file.originalname)
    //   if (ext !== '.jpg' && ext !== '.png' && ext !== '.mp4') {
    //     return cb(res.status(400).end('only jpg, png, mp4 is allowed'), false);
    //   }
    //   cb(null, true)
    // }
  })
   
  var upload = multer({ storage: storage }).single("file")

  
app.use('/api/users', require('./routes/users'));
// app.use('/api/private', require("./routes/private"))
app.use('/api/auth', require("./routes/auth"))

app.use('/api/movies', require('./routes/movies'))

app.use('/api/spotify', require('./routes/spotify'))

app.use('/api/books', require('./routes/books'))

app.use('/api/chat', require('./routes/chat'))

app.use('/api/favorites', require('./routes/favorites'))


app.post('/api/chat/uploadFiles', (req, res) => {
    upload(req, res,err => {
        if(err) {
            return res.json({success:false, err})
        }
        return res.json({success:true, url:res.req.file.path})
    })
})

io.on("connection", socket => {
    socket.on("Input Chat Message", msg => {
        connectDB().then(db => {

            try {
                let chat = new Chat({message:msg.chatMessage, sender:msg.userId,type:msg.type})
                chat.save((err, doc) => {
                    if(err) return res.json({success:false, err})
                       
                    Chat.find({"_id": doc._id})
                    .populate("sender")
                    .exec((err, docu) => {
                       
                        return io.emit("Output Chat Message", docu);
                       
                    });
                });

            } catch (error) {
                console.log(error)
            }
        })
    } )
})

// app.use(errorHandler);
app.use('/uploads', express.static('uploads'));


//Serve static assets if in production
if(process.env.NODE_ENV === 'production') {
    //Set static folder
    app.use(express.static('client/build'));
    app.get('*', (req,res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}

const PORT = process.env.PORT || 5000;

const server = server1.listen(PORT, () => console.log(`Server running on port ${PORT}`));




process.on("unhandledRejection", (err, promise) => {
    console.log(`Logged Error: ${err}`)
    server.close(() => process.exit(1)); 
})