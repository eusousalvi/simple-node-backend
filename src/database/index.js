const Sequelize = require('sequelize');
const dbConfig = require('../config/database');
const TipoArquivo = require('../models/TipoArquivo');
const Agrupamento = require('../models/Agrupamento');
const Norma = require('../models/Norma');
const Arquivo = require('../models/Arquivo');
const Usuario = require('../models/Usuario');

const connection = new Sequelize(dbConfig);

// Passando a conexão do Banco de Dados para as Models
TipoArquivo.init(connection);
Agrupamento.init(connection);
Norma.init(connection);
Arquivo.init(connection);
Usuario.init(connection);

// Enviando as Models para realizar a associação entre tabelas
TipoArquivo.associate(connection.models);
Agrupamento.associate(connection.models);
Norma.associate(connection.models);
Arquivo.associate(connection.models);

module.exports = connection;
