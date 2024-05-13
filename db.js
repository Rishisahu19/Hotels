const mongoose = require('mongoose');

// Replace 'mongodb://localhost:27017/mydatabase' with your MongoDB connection URL
const mongoURL = 'mongodb://localhost:27017/Helloworld';

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
