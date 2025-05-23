const express = require('express');
const router = express.Router();
const Person = require('./../models/Person');
const person = require('./../models/Person');

// post route to add aperson
router.post('/', async (req, res) => {
    try {
        const data = req.body // Assuming the request body contains the person data
        // Create a new person document using the mongoose model
        const newPerson = new Person(data);
        // save the new person document using the mongoose model
        const response = await newPerson.save();
        console.log('data saves');
        res.status(200).json(response);
    } catch (err) {
        console.log(err);
        res.status(500).json({ Error: 'internal server error' });
    }

})

// Get method to get the person
router.get('/', async (req, res) =>{
    try{
        const data = await Person.find();
        console.log('data fetched');
        res.status(200).json(data);


    }catch(err){
        onsole.log(err);
        res.status(500).json({Error: 'internal server error'});
    }
})


// Get method to get the person work type
router.get('/:workType', async (req, res)=>{
   try{
    const workType = req.params.workType; //Extract the work type from the url parameter
    if(workType == 'chef' || workType == 'manager' || workType == 'waite')
     {
            const response = await Person.find({work: workType});
            console.log('respone fetched');
            res.status(200).json(response);
    }else{
        res.status(400).json({Error: 'invalid work type'});
    }

   }catch(err){
    console.log(err);
    res.status(500).json({error: 'Internal server error'});

   }
})

// update
router.put('/:id', async(req, res) =>{
    try{
        const personId = req.params.id; // Extract the id from the Url parameter
        const updatePersonData = req.body; // update data for the person

        const respone = await person.findByIdAndUpdate(personId, updatePersonData, {
            new: true, // return the update document
            runValidators: true, // Run Mongoose Validation
        })
        if(!respone){
            return res.status(400).json({error: 'person not found'});
        }
        console.log('data update');
        res.status(200).json(respone);

    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal server error'});
    }
})

 //delete
 router.delete('./:id', async(req, res) =>{
    try{
        const personId = req.params.id;
 const response = await person.findByIdAndDelete(personId);
 if(!response){
    return res.status(400).json({error: 'person not found'});
}
console.log('data deleted');
res.status(200).json({message: 'person Deletes successfully'});
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal server error'});
    }
 })



module.exports = router;