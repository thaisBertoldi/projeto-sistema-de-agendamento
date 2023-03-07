const Appointment = require("../services/AppointmentService");

class AppointmentController {
  async create(req, res) {
    
    if (!req.body.name || !req.body.email || !req.body.cpf) {
        res.status(400);
        const missed = !req.body.name ? 'nome' : !req.body.email ? 'email' : 'CPF';
        res.json({ err: "Preencha o campo " + missed });
        return;
    }

    if (req.body.date === 'Invalid date') {
        res.status(400);
        res.json({ err: 'Você precisa informar uma data válida' });
        return;
    }

    if (!req.body.time) {
        res.status(400);
        res.json({ err: "Preencha o campo hora" });
        return;
    }

    await Appointment.Create(req.body);
    res.status(200);
    res.send("Cadastrado com sucesso");
  }

  async getAll(req, res) {
    const appointments = await Appointment.GetAll(false);
    res.json(appointments);
  }
}

module.exports = new AppointmentController();