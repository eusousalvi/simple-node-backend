require('dotenv').config();
const express = require('express');
const routes = require('./routes');
const path = require('path');
const morgan = require('morgan');
const logger = require('./config/winston');
const cors = require('cors');
require('./database');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/arquivos', express.static(path.resolve(__dirname, '..', 'uploads')));

app.use(routes);
app.use(morgan('combined', { stream: logger.stream.write }));

app.listen(3003);
