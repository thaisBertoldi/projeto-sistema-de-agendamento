const Appointment = require("../services/AppointmentService");

class AppointmentController {
  async create(req, res) {
    const status = await Appointment.Create(req.body);
    if (status) {
        res.status(200);
        res.send("Cadastrado com sucesso");
    } else {
        res.send('Ocorreu um erro');
        res.status(400);
    }

  }
}

module.exports = new AppointmentController();