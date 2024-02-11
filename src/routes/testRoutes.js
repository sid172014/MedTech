// Importing Libraries
const express = require('express');


// Importing Models
const {tests} = require('../db/database');

const routes = new express.Router();

routes.post('/' ,async (req,res) => {
    try{
        const items = await tests.find({
        });
        res.send(items);
    }catch(e){
        res.send("Error Occured");
    }
});

module.exports = routes;