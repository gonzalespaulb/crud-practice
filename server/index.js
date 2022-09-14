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

app.delete("/delete/:id", async (req, res) => {
    const id = req.params.id;

    await CodeModel.findByIdAndRemove(id).exec();
    res.send("delete");
})

app.get('/', async (req, res) => {

    CodeModel.find({} , (err, result) => {
        if(err) {
            res.send(err);
        }
        res.send(result);
    })
})

app.listen(3001, () => {
    console.log(`server running on port 3001`);
});

