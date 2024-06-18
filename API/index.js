const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(cors({ origin: true, credentials: true }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect("mongodb+srv://nour:nour@cluster0.dd4wfw5.mongodb.net/").then(() => {
    console.log("connected to mongo-db");
}).catch((e) => {
    console.log('error connecting to mongo', e);
});



app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

const Doctor = require("./models/Doctors")
app.get('/doctors', async (req, res) => {
    try {
        const doctors = await Doctor.find({});
        res.json(doctors);
    } catch (err) {
        res.status(500).send(err);
    }
});