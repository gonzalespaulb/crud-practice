const express = require('express');
const mongoose = require('mongoose');
const CodeModel = require('./model/Code');
const cors = require('cors');
const app = express();

const DATABASE_NAME = 'toilet';

// Temp pass dont hack me pls
const DB_PASS = '4d5dP897mxjLRKfR'

app.use(express.json());
app.use(cors());

mongoose.connect(`mongodb+srv://gonzalespaulb:${DB_PASS}@cluster0.ykwtcbm.mongodb.net/${DATABASE_NAME}?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
})

app.post('/insert', async (req, res) => {

    const establishment = req.body.establishment;
    const location = req.body.location;
    const bathroomCode = req.body.bathroomCode;

    const code = new CodeModel({
        establishment: establishment, 
        location: location,
        bathroomCode: bathroomCode,
    })

    try {
        await code.save();
        res.send(code);  
    } catch (err) {
        console.log(err); 
    }
})

app.get('/', async (req, res) => {
    try {
        const codes = await CodeModel.find();

        const jsonData = {
            status: 'success',
            data: codes,
        };

        return res.send(jsonData);
    } catch (err) {
        console.log(err);
    }
})

app.listen(3001, () => {
    console.log(`server running on port 3001`);
});

