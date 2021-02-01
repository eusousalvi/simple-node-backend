const Agrupamento = require('../models/Agrupamento');

//Controller para manipulação da tabela Agrupamento
module.exports = {
  // Lista todos os Agrupamentos
  async index(req, res) {
    try {
      const agrupamentos = await Agrupamento.findAll();
      return res.json(agrupamentos);
    } catch (error) {
      logger(error, req);
      return res.json(error);
    }
  },

  // Salva um Agrupamento no Banco de Dados
  async store(req, res) {
    const { agrupamento } = req.body;

    try {
      const agrupamentoSalvo = await Agrupamento.create(agrupamento);
      return res.json(agrupamentoSalvo);
    } catch (error) {
      logger(error, req);
      return res.json(error);
    }
  },
};
