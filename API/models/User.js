const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    image: { type: String, required: true }, // Assuming you store image path or URL as a string
});

const User = mongoose.model('User', userSchema); // Correct the model name here
module.exports = User;
