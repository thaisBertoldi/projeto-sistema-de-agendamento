const express = require('express')
const app = express();
const router = express.Router();
const appointmentController = require('../controllers/AppointmentController');

router.post('/create', appointmentController.create);
router.get('/get-all-appointments-not-finished', appointmentController.getAllNotFinished);
router.get('/get-all-appointments', appointmentController.getAll);
router.get('/search-appointment/:search', appointmentController.searchAppointment);
router.get('/getById/:id', appointmentController.getById);
router.post('/finish/:id', appointmentController.finishAppointment);

module.exports = router;