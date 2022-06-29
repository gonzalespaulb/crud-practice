const mongoose = require('mongoose');

const CodeSchema = new mongoose.Schema({
    establishment: {
        type: String, 
        required: true,
    },
    location: {
        type: String, 
        required: true,
    },
    bathroomCode: {
        type: String, 
        required: true,
    }
});

const Code = mongoose.model('Code', CodeSchema);
module.exports = Code; 