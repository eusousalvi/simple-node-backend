const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) return res.status(401).send({ error: 'O token não foi fornecido' });

  const parts = authHeader.split(' ');

  if (!parts.length === 2) return res.status(401).send({ error: 'Erro de token' });

  const [bearer, token] = parts;

  if (!/^Bearer$/i.test(bearer)) return res.status(401).send({ error: 'Token no formato errado' });

  jwt.verify(token, process.env.SECRET_KEY, (error, decoded) => {
    if (error) return res.status(401).send({ error: 'Token inválido' });

    req.userId = decoded.id;
    return next();
  });
};
