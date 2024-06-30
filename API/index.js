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

const User = require("./models/User"); // Importing the user model
const Doctor = require("./models/Doctors");

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

// // POST endpoint to add a new user
// app.post('/users', async (req, res) => {
//     try {
//         const { id, name, email, image } = req.body;

//         // Create a new instance of User model
//         const newUser = new User({
//             id,
//             name,
//             email,
//             image
//         });

//         // Save the new user to MongoDB
//         const savedUser = await newUser.save();

//         res.status(201).json(savedUser); // Respond with the saved user document
//     } catch (error) {
//         console.error("Error saving user:", error);
//         res.status(500).json({ error: "Error saving user" });
//     }
// });

// // GET endpoint to fetch all users
// app.get('/users', async (req, res) => {
//     try {
//         const users = await User.find({});
//         res.json(users);
//     } catch (error) {
//         res.status(500).json({ error: "Error fetching users" });
//     }
// });

// app.listen(port, () => {
//     console.log(`Server is running on http://localhost:${port}`);
// });



// POST endpoint to add a new user
app.post('/users', async (req, res) => {
    try {
        const {  name, email, image } = req.body;

        // Check if user already exists
        let user = await User.findOne({ email });

        if (!user) {
            // Create a new instance of User model
            user = new User({
                
                name,
                email,
                image
            });

            // Save the new user to MongoDB
            const savedUser = await user.save();

            res.status(201).json(savedUser); // Respond with the saved user document
        } else {
            res.status(200).json(user); // User already exists, respond with the existing user document
        }
    } catch (error) {
        console.error("Error saving user:", error);
        res.status(500).json({ error: "Error saving user" });
    }
});

// GET endpoint to fetch all users
app.get('/users', async (req, res) => {
    try {
        const users = await User.find({});
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: "Error fetching users" });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});