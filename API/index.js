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
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.error("Error connecting to MongoDB:", err);
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

const Doctor = require("./models/Doctors");
const Appointment = require("./models/Appointments");


// POST endpoint to add a new doctor
app.post('/doctors', async (req, res) => {
    try {
        const { id, name, address, email, specialization, image, about, location, phoneNumber } = req.body;

        // Create a new instance of Doctor model
        const newDoctor = new Doctor({
            id,
            name,
            address,
            email,
            specialization,
            image,
            about,
            location,
            phoneNumber
        });

        // Save the new doctor to MongoDB
        const savedDoctor = await newDoctor.save();

        res.status(201).json(savedDoctor); // Respond with the saved doctor document
    } catch (error) {
        console.error("Error saving doctor:", error);
        res.status(500).json({ error: "Error saving doctor" });
    }
});

// GET endpoint to fetch all doctors
app.get('/doctors', async (req, res) => {
    try {
        const doctors = await Doctor.find({});
        res.json(doctors);
    } catch (error) {
        res.status(500).json({ error: "Error fetching doctors" });
    }
});

//Appointments
// app.post('/appointments', async (req, res) => {
//     const { id, date, timeSlot, notes, patientID, doctorID } = req.body;

//     const newAppointment = new Appointment({
//         id,
//         date,
//         timeSlot,
//         notes,
//         patientID,
//         doctorID
//     });

//     try {
//         const savedAppointment = await newAppointment.save();
//         res.status(201).json(savedAppointment);
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// });

// // Endpoint to get all appointments
// app.get('/appointments', async (req, res) => {
//     try {
//         const appointments = await Appointment.find({}).populate('doctorID').populate('patientID');
//         res.json(appointments);
//     } catch (err) {
//         res.status(500).send(err);
//     }
// });


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
