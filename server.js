require('dotenv').config({path: "./config.env"});
const express = require('express');
const connectDB = require('./config/db')
const cors = require('cors')
const { createProxyMiddleware } = require('http-proxy-middleware');

//Connect DB

connectDB();

const app = express();

app.use(express.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.header(
    "Access-Control-Allow-Header",
    "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
    });

app.options("*", cors());

app.use('/api/users', require('./routes/users'));
// app.use('/api/private', require("./routes/private"))
app.use('/api/auth', require("./routes/auth"))

// app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

process.on("unhandledRejection", (err, promise) => {
    console.log(`Logged Error: ${err}`)
    server.close(() => process.exit(1));
})