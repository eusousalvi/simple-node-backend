const logger = require('../config/winston');

module.exports = (error, req) => {
  const data = new Date().toUTCString();
  logger.error({
    DATA: data,
    METHOD: req.method,
    URL: req.originalUrl,
    IP: req.ip,
  });
};
