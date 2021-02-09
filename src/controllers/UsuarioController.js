const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');
const Usuario = require('../models/Usuario');
const saltRounds = 10;

function generateToken(id) {
  return jwt.sign({ id }, authConfig.secret, {
    expiresIn: 300,
  });
}

module.exports = {
  // Salva um Usuario no Banco de Dados
  async store(req, res) {
    const { nome, login, senha, admin } = req.body;

    if (await Usuario.findOne({ where: { login: login } }))
      return res.status(400).send({ error: 'Usuário já cadastrado' });

    const passwordHash = await bcrypt.hash(senha, saltRounds);

    try {
      const usuarioSalvo = await Usuario.create({ nome, login, senha: passwordHash, admin });

      usuarioSalvo.senha = undefined;

      const token = generateToken(usuarioSalvo.id);
      return res.send({ usuarioSalvo, token });
    } catch (error) {
      logger(error, req);
      return res.json(error);
    }
  },
  // Valida o usuário no sistema
  async login(req, res) {
    const { login, senha } = req.body;
    const user = await Usuario.findOne({ where: { login: login } });

    if (!user) return res.status(400).send({ error: 'Usuário não encontrado' });

    if (!(await bcrypt.compare(senha, user.senha)))
      return res.status(400).send({ error: 'Senha Inválida' });

    user.senha = undefined;

    const token = generateToken(user.id);

    res.send({ user, token });
  },
};
