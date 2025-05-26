const mongoose = require('mongoose');

//mongoose.connect('mongodb://localhost:27017/mydb');
const mongoUrl= 'mongodb+srv://nodee:C2g7w.kWtiU4bxy@nodeapp.moxgdiz.mongodb.net/';



// define the mongodb connection url
// const mongoUrl ='mongodb://loclhost:2434/hotels'// replace 'mydatabase' with your database name

// // set up mongodb connection
// mongoose.connect(mongoUrl, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });

// Get the default connection 
// Mongoose maintains a default connection object representing the mongodb connection.
const db = mongoose.connection;
// define event listeners for database connection
db.on('connected', () =>{
    console.log('connected to mongoDb server');
});

db.on('error', (err) =>{
    console.log('mongodb connection error:', err);
});
db.on('disconnected', () => {
    console.log('Mongodb disconnected');
});
// Export the datbase connection
module.exports =db;

