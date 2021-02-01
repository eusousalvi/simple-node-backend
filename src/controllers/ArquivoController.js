const Arquivo = require('../models/Arquivo');
const TipoArquivo = require('../controllers/TipoArquivoController');
require('dotenv/config');

//Controller para manipulação da tabela Arquivo
module.exports = {
  // Salva um arquivo no Banco de Dados
  async store(file, norma_id) {
    const tipo_id = await TipoArquivo.getId(file);
    const arquivo = {
      tipo_id,
      original_name: file.originalname,
      hash_name: file.filename,
      thumbnail: process.env.APP_URL,
      link: `${process.env.APP_URL}arquivos/${file.filename}`,
      norma_id,
    };

    try {
      const arquivoSalvo = await Arquivo.create(arquivo);
      return arquivoSalvo;
    } catch (error) {
      return error;
    }
  },
};
