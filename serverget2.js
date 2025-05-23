const express = require('express')
const app =express();

// new json
app.use(express.json());

const Person = require('./models/Person');

const mongoose = require('mongoose');
app.get('/',(req, res)=>{
            res.send('welcom to my hotel..')
        
        });

        app.post('/person', async (req, res)=>{
         try{
            const data = req.body // Assuming the request body contains the person data
                // Create a new person document using the mongoose model
                const newPerson = new Person(data);
            // save the new person document using the mongoose model
               const response = await newPerson.save();
               console.log('data saves');
               res.status(200).json(response);
                

         }catch(err){
console.log(err);
res.status(500).json({Error: 'internal server error'});
         }

        })
        


app.listen(3000, ()=>{
    console.log('listening');
});
