const TipoArquivo = require('../models/TipoArquivo');

module.exports = {
  async index(req, res) {
    try {
      const tiposArquivo = await TipoArquivo.findAll();
      return res.json(tiposArquivo);
    } catch (error) {
      return res.json(error);
    }
  },
  async store(req, res) {
    const { tipoArquivo } = req.body;

    try {
      const tipoArquivoSalvo = await TipoArquivo.create(tipoArquivo);
      return res.json(tipoArquivoSalvo);
    } catch (error) {
      return res.json(error);
    }
  },
};
