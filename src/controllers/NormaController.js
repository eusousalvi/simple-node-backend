const Norma = require('../models/Norma');
const Arquivo = require('../controllers/ArquivoController');
const logger = require('../controllers/LoggerController');
const { Op } = require('sequelize');

//Controller para manipulação da tabela Norma
module.exports = {
  // Lista as Normas filtrando por nr_norma, titulo ou tag
  async index(req, res) {
    try {
      const { searchTerm } = req.params;
      const norma = await Norma.findAll({
        include: [{ all: true, nested: true }],
        where: {
          [Op.or]: [
            {
              nr_norma: {
                [Op.like]: `${searchTerm}%`,
              },
            },
            {
              titulo: {
                [Op.like]: `%${searchTerm}%`,
              },
            },
            {
              tag: {
                [Op.like]: `%${searchTerm}%`,
              },
            },
          ],
          [Op.and]: [
            {
              ativo: true,
            },
          ],
        },
      });

      return res.json(norma);
    } catch (error) {
      logger(error, req);
      return res.json(error);
    }
  },

  // Salva uma Norma no Banco de Dados
  async store(req, res) {
    const norma = req.body;
    const file = req.files[0];

    try {
      const normaSalva = await Norma.create(norma);
      await Arquivo.store(file, normaSalva.id, req);

      return res.json(normaSalva);
    } catch (error) {
      logger(error, req);
      return res.json(error);
    }
  },
};
