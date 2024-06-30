const mongoose = require('mongoose');


const doctorSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    name: { type: String, required: true },
    address: { type: String, required: true },
    email: { type: String, required: true },
    specialization: { type: String, required: true },
    image: { type: String, required: true }, // Assuming you store image path or URL as a string
    about: { type: String, required: true },
    location: {
        latitude: { type: Number, required: true },
        longitude: { type: Number, required: true }
    },
    phoneNumber: { type: String, required: true } // Add phoneNumber field if needed
});
const Doctor = mongoose.model('Doctor', doctorSchema);
module.exports = Doctor