const routes = require('express').Router();
const multer = require('multer');
const multerConfig = require('./config/multer');
const authMiddleware = require('./middlewares/auth');
const NormaController = require('./controllers/NormaController');
const AgrupamentoController = require('./controllers/AgrupamentoController');
const TipoArquivoController = require('./controllers/TipoArquivoController');
const UsuarioController = require('./controllers/UsuarioController');

routes.post('/tipos_arquivo', TipoArquivoController.store);

routes.post('/agrupamentos', AgrupamentoController.store);
routes.get('/agrupamentos', AgrupamentoController.index);

routes.post('/normas', [authMiddleware, multer(multerConfig).any()], NormaController.store);
routes.get('/normas/:searchTerm', NormaController.index);

routes.post('/login', UsuarioController.login);
routes.post('/cadastro', UsuarioController.store);

module.exports = routes;
