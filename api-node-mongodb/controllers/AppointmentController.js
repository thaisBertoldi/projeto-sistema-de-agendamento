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

  async getAllNotFinished(req, res) {
    const appointments = await Appointment.GetAll(false);
    res.json(appointments);
  }

  async getAll(req, res) {
    const appointments = await Appointment.GetAll(true);
    res.json(appointments);
  }

  async searchAppointment(req, res) {
    const data = await Appointment.SearchAppointment(req.params.search);

    if (!data) {
      res.status(404);
      res.json({ error: "Consulta não encontrada" });
      return;
    }

    res.json(data);
  }

  async getById(req, res) {
    const data = await Appointment.GetById(req.params.id);
    if (!data) {
      res.status(404);
      res.json({ error: "Consulta não encontrada" });
      return;
    }
    res.json(data);
  }

  async finishAppointment(req, res) {
    const data = await Appointment.FinishAppointment(req.params.id);
    if (data) {
      res.status(200);
      res.send("Alterado com sucesso");
    } else {
      res.status(400);
      res.json({ err: "Não foi possível finalizar a consulta." });
      return;
    }

  }
}

module.exports = new AppointmentController();