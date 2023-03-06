const express = require('express')
const app = express();
const router = express.Router();
const appointmentController = require('../controllers/AppointmentController');

router.post('/create', appointmentController.create);
router.get('/get-all-appointments', appointmentController.getAll);

module.exports = router;