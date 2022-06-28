const express = require('express');
const mongoose = require('mongoose');
const CodeModel = require('./model/Code');
const app = express();

app.use(express.json());

mongoose.connect('mongodb+srv://gonzalespaulb:4d5dP897mxjLRKfR@cluster0.ykwtcbm.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
})

app.get('/', async (req, res) => {
    const code = new CodeModel({
        establishment: 'Starbucks', 
        address: '4351 Frost Dr. Oxnard, CA 93035',
        code: '2020'
    })

    try {
        await code.save();
        res.send('Data was inserted');
    } catch (err) {
        console.log(err); 
    }
})

app.listen(3001, () => {
    console.log(`server running on port 3001`);
});

