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

const tests = mongoose.model('tests', testSchema);
module.exports = {tests};