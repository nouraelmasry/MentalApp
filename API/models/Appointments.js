const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    date: { type: Date, required: true },
    timeSlot: { type: String, required: true },
    notes: { type: String, required: false },
    patientID: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient', required: true },
    doctorID: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor', required: true }
});

const Appointment = mongoose.model('Appointment', appointmentSchema);
module.exports = Appointment;
