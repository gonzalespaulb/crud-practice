const mongoose = require('mongoose');

const CodeSchema = new mongoose.Schema({
    establishment: {
        type: String, 
        required: true,
    },
    address: {
        type: String, 
        required: true,
    },
    code: {
        type: String, 
        required: true,
    }
});

const Code = mongoose.model('Code', CodeSchema);
module.exports = Code; 