const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    agenda: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    fromtime: {
        type: String,
        required: true
    },
    totime: {
        type: String,
        required: true
    },
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
});

const Appointment = mongoose.model('Appointment', appointmentSchema, 'Appointment')

module.exports = Appointment