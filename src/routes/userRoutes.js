const express = require('express');

const routes = new express.Router();

routes.get('/users/signup', (req,res) => {
    try{
        res.send("User Signup Request");
    }catch(e){
        res.send(e.message);
    }
})

module.exports = routes;
