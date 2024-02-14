const mongoose = require('mongoose');


mongoose.connect(process.env.MONGODB_URL);

const testSchema = new mongoose.Schema({    
    condition : {
        type : String,
        required : true
    },
    tests_combined : {
        type : String,
        required : true
    }
});

const userSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true,
        unique : true
    },
    password :{
      type : String
    },
    email : {
        type : String
    },
    age:{
        type : Number
    },
    phone:{
        type : Number
    },
    userTestInfo : {
        type : Array,
        def : []
    }
})

const tests = mongoose.model('tests', testSchema);
const users = mongoose.model('user',userSchema);

module.exports = {tests, users};
