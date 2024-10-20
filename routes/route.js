const express=require('express')
const data=require('../data/data');
const routes=express.Router()


routes.get('/profile/:index',(req,res)=>{
    const index = parseInt(req.params.index); 
  
    const user = data.find(element => element.id === index);

    if (user) {
        // Render the profile page with the user data
        res.render('index', {user}  );
    } else {
        // If no user is found, send a 404 error
        res.status(404).send('User not found');
    }
})

module.exports=routes