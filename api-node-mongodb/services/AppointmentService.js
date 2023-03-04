const appointment = require('../models/Appointment');
const mongoose = require('mongoose');

const appointmentModel = mongoose.model('Appointment', appointment);

class AppointmentService {

    async Create(data) {
        const newAppointment = new appointmentModel({
            name: data.name,
            email: data.email,
            description: data.description,
            cpf: data.cpf,
            date: data.date,
            time: data.time,
            finished: false
        });
        try {
            await newAppointment.save();
            return true;
        } catch(error) {
            console.log(error);
            return false;
        }
        
    }
}

module.exports = new AppointmentService();