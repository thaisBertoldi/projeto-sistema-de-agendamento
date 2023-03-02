const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/agendamento');

app.get('/', (req, res) => {
    res.send('Olá, teste!');
});

app.get('/cadastro', () => {})

app.listen(8080, () => {});