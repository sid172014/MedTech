// Importing Libraries
const express = require('express');


// Importing Models
const {tests} = require('../db/database');

const routes = new express.Router();


routes.get('/illness', async (req,res) => {
    try{
        const allTests = await tests.find({});
        res.send(allTests)
    }catch(e){
        res.status(404).send(e.message);
    }
})

routes.post('/getillness' ,async (req,res) => {
    try{
        const illnesses = req.body.conditions;
        const testsAssigned = []
        console.log(illnesses);
        const promises = illnesses.map(async (data) => {   // A bunch of promises
            const test = await tests.findOne({condition : data});
            if(test){
                testsAssigned.push(test);
            }
        });
        await Promise.all(promises);    // Waits for all the promises to be resolved
        res.send(testsAssigned);
    }catch(e){
        res.send(e.message);
    }
});

module.exports = routes;