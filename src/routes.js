const routes = require('express').Router();
const multer = require('multer');
const multerConfig = require('./config/multer');
const NormaController = require('./controllers/NormaController');
const AgrupamentoController = require('./controllers/AgrupamentoController');
const TipoArquivoController = require('./controllers/TipoArquivoController');
const ArquivoController = require('./controllers/ArquivoController');

routes.post('/upload', multer(multerConfig).single('file'), (req, res) => {
  return res.json(req.file);
});

routes.post('/tipo_arquivo', TipoArquivoController.store);
routes.get('/tipos_arquivo', TipoArquivoController.index);

routes.post('/agrupamento', AgrupamentoController.store);
routes.get('/agrupamentos', AgrupamentoController.index);

routes.post('/norma', NormaController.store);
routes.get('/normas', NormaController.index);

routes.post('/arquivo', ArquivoController.store);
routes.get('/arquivos', ArquivoController.index);

routes.get('/', (req, res) => {
  return res.json({ hello: 'world' });
});

module.exports = routes;
