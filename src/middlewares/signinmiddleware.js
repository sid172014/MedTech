const {users} = require('../db/database');

const signinmiddleware =async (req,res,next) =>{
    try{   
        const email = req.body.email;
        const password = req.body.password;
    
        const user = await users.findOne({
            email : email
        });
        
        if(user.password === password){
            req.user = user;
            console.log("Passing");
            next();
        }else{
            throw new Error("Password is wrong");
        }

    }catch(e){
        res.send(e.message);
    }
};


module.exports = signinmiddleware;