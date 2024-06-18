const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({

    description: { type: String, required: true },
    id: { type: Number, required: true },
    name: { type: String, required: true },
    phoneNumber: { type: String, required: true },


});

const Doctor = mongoose.model('Doctor', doctorSchema);
module.exports = Doctor