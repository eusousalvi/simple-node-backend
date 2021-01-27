const Arquivo = require('../models/Arquivo');

module.exports = {
  async index(req, res) {
    try {
      const arquivo = await Arquivo.findAll();
      return res.json(arquivo);
    } catch (error) {
      return res.json(error);
    }
  },
  async store(req, res) {
    const { arquivo } = req.body;

    try {
      const arquivoSalvo = await Arquivo.create(arquivo);
      return res.json(arquivoSalvo);
    } catch (error) {
      return res.json(error);
    }
  },
};
