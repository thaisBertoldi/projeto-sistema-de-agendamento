const appointment = require('../models/Appointment');
const mongoose = require('mongoose');
const AppointmentFactory = require('../factories/AppointmentFactory');

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

    async GetAll(showFinished) {
        if (showFinished) {
            return await appointmentModel.find();
        } else {
            const data = await appointmentModel.find({ 'finished': false });
            const newAppointments = [];
            data.forEach(appointment => {
                if (appointment.date) {
                    newAppointments.push( AppointmentFactory.Build(appointment) );
                }
            });
            return newAppointments;
        }
    }
}

module.exports = new AppointmentService();