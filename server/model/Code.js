const mongoose = require('mongoose');

const COLLECTION = `code`;

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

const Code = mongoose.model(COLLECTION, CodeSchema);
module.exports = Code; 