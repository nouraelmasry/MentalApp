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
const userSchema = new mongoose.Schema({
    phoneNumber: String,
    gender: String,
});

const User = mongoose.model('User', userSchema);

app.get('/userdata', async (req, res) => {
    try {
        const user = await User.findOne();
        res.json(user);
    } catch (error) {
        res.status(500).send(error);
    }
});

app.post('/userdata', async (req, res) => {
    try {
        const { phoneNumber, gender } = req.body;
        let user = await User.findOne();
        if (user) {
            user.phoneNumber = phoneNumber;
            user.gender = gender;
        } else {
            user = new User({ phoneNumber, gender });
        }
        await user.save();
        res.status(200).send('User data saved successfully.');
    } catch (error) {
        res.status(500).send(error);
    }
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