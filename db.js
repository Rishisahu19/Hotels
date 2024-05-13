const mongoose = require('mongoose');
require('dotenv').config();

// Replace 'mongodb://localhost:27017/mydatabase' with your MongoDB connection URL
// const mongoURL = 'mongodb://localhost:27017/Helloworld';
// const mongoURL='mongodb+srv://rishisahu193:210427Rishisahu@hotelbackend.mrvteua.mongodb.net/'

// const mongoURL=process.env.MONGODB_URL_LOCAL;
const mongoURL=process.env.MONGODB_URL;

// mongoose.connect(mongoURL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });

mongoose.connect(mongoURL);

const db = mongoose.connection;

db.on('connected', () => {
    console.log("Connected to MongoDB Server");
});

db.on('error', (err) => {
    console.log("MongoDB Connection Error:", err);
});

db.on('disconnected', () => {
    console.log("MongoDB Disconnected");
});

module.exports = db;
