const mongoose = require('mongoose');
//require('dotenv').config(); // Load environment variables from a .env file into process.env
// const mongoURL = 'mongodb://localhost:27017/DB'; // You could use an environment variable for better flexibility

require('dotenv').config();

const mongoURL = process.env.MONGODB_URL;
//const mongoURL= process.env.MONGODB_URL_LOCAL;
//const mongoURL = 'mongodb+srv://nodee:@cluster0.vnbjiq4.mongodb.net/';
mongoose.connect(mongoURL, {
     useNewUrlParser: true,
      useUnifiedTopology: true
     })
    // .then(() => {
    //     console.log('Connected to the database successfully');
    // })
    // .catch((err) => {
    //     console.log('Error connecting to the database:', err);
    //     process.exit(1); // Exit the process if the connection fails
    // });

const db = mongoose.connection;

db.on('disconnected', () => {
    console.log('Disconnected from the database');
});

module.exports = db;







// const mongoose = require('mongoose');

// //mongoose.connect('mongodb://localhost:27017/mydb');


// const mongoUrl= 'mongodb+srv://nodee:@cluster0.vnbjiq4.mongodb.net/'



// // 'mongodb+srv://nodee:@nodeapp.moxgdiz.mongodb.net/';



// // define the mongodb connection url
// // const mongoUrl ='mongodb://loclhost:2434/hotels'// replace 'mydatabase' with your database name

// // // set up mongodb connection
// // mongoose.connect(mongoUrl, {
// //     useNewUrlParser: true,
// //     useUnifiedTopology: true
// // });

// // Get the default connection 
// // Mongoose maintains a default connection object representing the mongodb connection.
// const db = mongoose.connection;
// // define event listeners for database connection
// db.on('connected', () =>{
//     console.log('connected to mongoDb server');
// });

// db.on('error', (err) =>{
//     console.log('mongodb connection error:', err);
// });
// db.on('disconnected', () => {
//     console.log('Mongodb disconnected');
// });
// // Export the datbase connection
// module.exports =db;

