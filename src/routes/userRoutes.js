const express = require('express');

const {users} = require('../db/database');

const routes = new express.Router();

routes.post('/users/signup',async (req,res) => {
    try{
        const user = new users(req.body);
        await user.save();
        res.send(user);
    }catch(e){
        res.send(e.message);
    }
});

routes.patch('/users/signup',async (req,res) => {
    try{
        const user = await users.updateOne({
            username : req.body.username.toLowerCase()
        },{
            password : req.body.password,
            email : req.body.email,
            phone : req.body.phone
        });
        res.send(user);
    }catch(e){
        res.send(e.message);
    }
})

routes.post('/users/signin', async(req,res) =>{
    try{
        const user = await users.findOne({email : req.body.email,password:req.body.password});
        if(!user){
            res.send("user does not exits");
        }
        res.send(user);
    }catch(e){
        console.log(e.message);
    }
})
module.exports = routes;
