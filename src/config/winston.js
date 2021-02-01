const winston = require('winston');

// Configurações de log do winston
const logger = new winston.createLogger({
  level: 'info',
  transports: [new winston.transports.File({ filename: './logs/error.log', level: 'error' })],
  exitOnError: false,
});

module.exports = logger;
