const routes = require('express').Router();
const multer = require('multer');
const multerConfig = require('./config/multer');
const NormaController = require('./controllers/NormaController');
const AgrupamentoController = require('./controllers/AgrupamentoController');
const TipoArquivo = require('./controllers/TipoArquivoController');

routes.post('/tipos_arquivo', TipoArquivo.store);

routes.post('/agrupamentos', AgrupamentoController.store);
routes.get('/agrupamentos', AgrupamentoController.index);

routes.post('/normas', multer(multerConfig).any(), NormaController.store);
routes.get('/normas/:searchTerm', NormaController.index);

module.exports = routes;
