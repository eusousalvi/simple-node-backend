const Agrupamento = require('../models/Agrupamento');

module.exports = {
  async index(req, res) {
    try {
      const agrupamentos = await Agrupamento.findAll();
      return res.json(agrupamentos);
    } catch (error) {
      return res.json(error);
    }
  },
  async store(req, res) {
    const { agrupamento } = req.body;

    try {
      const agrupamentoSalvo = await Agrupamento.create(agrupamento);
      return res.json(agrupamentoSalvo);
    } catch (error) {
      return res.json(error);
    }
  },
};
