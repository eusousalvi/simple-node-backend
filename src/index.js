require('dotenv').config();
const express = require('express');
const routes = require('./routes');
const path = require('path');
require('./database');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/arquivos', express.static(path.resolve(__dirname, '..', 'uploads')));

app.use(routes);

app.listen(3000);
