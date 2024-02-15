const express = require('express');
const path = require('path');
const { users } = require('../db/database');
const scheduleRemindersCall = require('../utils/medicalReminders');

const routes = new express.Router();

const signinmiddleware = require('../middlewares/signinmiddleware');

routes.get('/', (req, res) => {
    try {
        res.render('index');
    } catch (e) {
        res.send(e.message);
    }
});

routes.post('/users/signup', async (req, res) => {
    try {
        const user = new users(req.body);
        await user.save();
        res.send(user);
    } catch (e) {
        res.send(e.message);
    }
});

routes.post('/users/signin', signinmiddleware, async (req, res) => {
    try {
        res.send(req.user);
    } catch (e) {
        res.json({
            error: "Error occured"
        });
    }
});

routes.get('/users/second/:id', async (req, res) => {
    try {
        const user = await users.findOne({
            _id : req.params.id
        });
        console.log(user);
        res.render('second',{
            name : user.username,
            phone : user.phone,
            email : user.email
        });
    } catch (e) {
        res.send("Invalid id");
    }
});

routes.patch('/users/update/:id', async (req,res) =>{
    try{
        const updateUser = await users.updateOne({
            _id : req.params.id
        },{
            phone : req.body.phone,
            address : req.body.address
        });
        res.json({
            message : "User updated"
        })
    }catch(e){
        res.json({
            error : "User not updated"
        })
    }
});

routes.get('/users/call/:id',async (req,res) => {
    try{
        const user = await users.findOne({
            _id : req.params.id
        });
        res.render('scriptreminder', {

        });
    }catch(e){
        res.send(e.message);
    }
});

routes.post('/users/call/:id',async (req,res) => {
    try{
        const user = await users.findOne({
            _id : req.params.id
        });
        
        const medicine = req.body.medicine;
        const time = req.body.dateTime;
        const number = req.body.number;

        scheduleRemindersCall(time,number);
        res.json({
            message : "Success"
        });
    }catch(e){
        res.json({
            error : "Error"
        });
    }
})

module.exports = routes;
