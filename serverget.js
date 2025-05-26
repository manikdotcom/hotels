const express = require('express')
const app =express();
const db= require('./db');


//old json
//const bodyParser= require('bodyParser'); //req.body
//app.use(bodyParser.json()); // req.body

// new json
app.use(express.json());

//const personRoutes = require('./routes/Person');
//const menuItemRoutes = require('./routes/menuItemRoutes');
//const mongoose = require('mongoose');

app.get('/', function (req, res){
            res.send('welcom to my hotel..')
        
        });

        

            // this is callback is not work
        //     const data = req.body // Assuming the request body contains the person data
        //     // Create a new person document using the mongoose model
        //     const newPerson = new person(data);
        //    // save the new person document using the mongoose model
        //    newPerson.save((Error, saveperson) =>{
        //     if(Error){
        //         console.log('error saving person', Error);
        //         res.status(500).json({Error: 'Internal server error'})
        //     }
        //     else{
        //         console.log('data saved successfully');
        //         res.status(200).json({saveperson});
        //     }
        //    })
        
        
// mongoose.connect("mongodb+srv://nodee:UyzJkzquAQHFwIMT@nodeapp.moxgdiz.mongodb.net/?retryWrites=true&w=majority&appName=nodee").then(function(){
//     app.get('/', function(req, res){
//         res.send('welcome to my hotel ..')
//     });
    
//     app.get('/veg',(req, res)=>{
//         res.send('veg food')
    
//     });
//     app.get('/idli',(req,res)=>{
//         var custom ={
//             name: 'rava idli',
//         size: '10cm',
//         sambhar: true,
//         chutney: false,
//         }
//         res.send(custom)
//     });
    
// });

// app.post('/items', (req, res)=>{
//     res.log('data is saveds')
// });
// app.get('/', function(req, res){
//     res.send('welcome to my hotel ..')
// })

// app.get('/veg',(req, res)=>{
//     res.send('veg food')

// })
// app.get('/idli',(req,res)=>{
//     var custom ={
//         name: 'rava idli',
//     size: '10cm',
//     sambhar: true,
//     chutney: false,
//     }
//     res.send(custom)
// })



// Import the router files
const personRoutes = require('./routes/personRoutes');
const menuItemRoutes =require('./routes/menuItemRoutes');

// use the routers
app.use('/person', personRoutes);
app.use('/menu', menuItemRoutes);
app.listen(300, ()=>{
    console.log('listening');
});
//cccc