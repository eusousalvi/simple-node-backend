const Sequelize = require('sequelize');
const dbConfig = require('../config/database');
const TipoArquivo = require('../models/TipoArquivo');
const Agrupamento = require('../models/Agrupamento');
const Norma = require('../models/Norma');
const Arquivo = require('../models/Arquivo');

const connection = new Sequelize(dbConfig);

TipoArquivo.init(connection);
Arquivo.init(connection);
Agrupamento.init(connection);
Norma.init(connection);

module.exports = connection;
