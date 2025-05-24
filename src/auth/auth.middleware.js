const jwt = require('jsonwebtoken');

function verificarToken(req, res, next) {
  const authHeader = req.headers['authorization'];

  if (!authHeader) {
    return res.status(401).json({ mensaje: 'Token no proporcionado' });
  }

  const token = authHeader.split(' ')[1]; // Espera: "Bearer TOKEN_AQUI"

  if (!token) {
    return res.status(401).json({ mensaje: 'Token inválido' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.usuario = decoded; // Agrega info del usuario al request
    next(); // Permite el paso a la ruta
  } catch (err) {
    return res.status(403).json({ mensaje: 'Token no válido o expirado' });
  }
}

module.exports = verificarToken;
