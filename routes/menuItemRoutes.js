const express = require('express');
const router = express.Router();
const Person = require('./../models/Person');

//Post method to add a menu Item
router.post('/', async(req, res) =>{
    try{
        const date =req.body
        const newMenu =new menuItem(data);
        const response = await newMenu.save();
        console.log(' saved');
        res.status(200).json(response)
    }
    catch(err){
        console.log(err);
        res.status(500).json({Error: 'Internal server error'});
    }
})
// Get method to get the menu Items
router.get('/', async(req, res) =>{
    try{
        const data = await menuItem.find();
        console.log('data fetch');
        res.status(200).json(data);
    }
    catch(err){
     console.log(err);
     res.status(500).json({Error: 'Internal server Error'});
    }
})
// Get method to get the person work type
router.get('/:taste', async (req, res)=>{
    try{
     const taste = req.params.taste; //Extract the work type from the url parameter
     if(taste == 'spicy' || taste == 'sweet' || taste == 'sour')
      {
             const response = await Person.find({taste: taste});
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

module.exports = router;
// command hh