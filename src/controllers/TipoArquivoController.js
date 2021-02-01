const TipoArquivo = require('../models/TipoArquivo');

module.exports = {
  // Salva um Tipo de Arquivo no Banco de Dados
  async store(req, res) {
    const { tipoArquivo } = req.body;

    try {
      const tipoArquivoSalvo = await TipoArquivo.create(tipoArquivo);
      return res.json(tipoArquivoSalvo);
    } catch (error) {
      logger(error, req);
      return res.json(error);
    }
  },

  // Retorna o ID do tipo de arquivo enviado
  async getId(file) {
    try {
      let tiposArquivos = await TipoArquivo.findAll();
      tiposArquivos = tiposArquivos.reduce((tipos, tipo) => [...tipos, { ...tipo.dataValues }], []);
      const { id } = tiposArquivos.find((tipo) => tipo.mime === file.mimetype);
      return id;
    } catch (error) {
      return error;
    }
  },
};
