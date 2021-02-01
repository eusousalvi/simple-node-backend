require('dotenv').config();

// Configurações de conexão com o banco para o Sequelize
module.exports = {
  dialect: 'mssql',
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DATABASE,
  define: {
    timeStamps: true,
  },
  dialectOptions: {
    encrypt: true,
  },
};
