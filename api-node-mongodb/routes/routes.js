const express = require('express')
const app = express();
const router = express.Router();
const aappointmentController = require('../controllers/AppointmentController');

router.post('/create', aappointmentController.create);

module.exports = router;