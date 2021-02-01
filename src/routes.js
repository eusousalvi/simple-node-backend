const routes = require('express').Router();
const multer = require('multer');
const multerConfig = require('./config/multer');
const NormaController = require('./controllers/NormaController');
const AgrupamentoController = require('./controllers/AgrupamentoController');
const ArquivoController = require('./controllers/ArquivoController');

routes.post('/upload', multer(multerConfig).single('file'), (req, res) => {
  return res.json(req.file);
});

routes.post('/agrupamentos', AgrupamentoController.store);
routes.get('/agrupamentos', AgrupamentoController.index);

routes.post('/normas', multer(multerConfig).any(), NormaController.store);
routes.get('/normas/:searchTerm', NormaController.index);

module.exports = routes;
