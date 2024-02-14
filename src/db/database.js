const mongoose = require('mongoose');


mongoose.connect(process.env.MONGODB_URL);

const userSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true,
        unique : true
    },
    password :{
      type : String,
      required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    phone : {
        type : Number,
        required : true,
        unique : true
    },
    address : {
        type : String
    }
})

const users = mongoose.model('user',userSchema);

module.exports = {users};
