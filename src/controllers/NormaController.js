const Norma = require('../models/Norma');

module.exports = {
  async index(req, res) {
    try {
      const normas = await Norma.findAll();
      return res.json(normas);
    } catch (error) {
      return res.json(error);
    }
  },
  async store(req, res) {
    const { norma } = req.body;

    try {
      const normaSalva = await Norma.create(norma);
      return res.json(normaSalva);
    } catch (error) {
      return res.json(error);
    }
  },
};
