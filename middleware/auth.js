// Middleware is a function thas has access to request and response cycle and
// request response object

// Verify the token
const jwt = require('jsonwebtoken');
// we need to access to the secret so we bring config
const config = require('config');

module.exports = function (req, res, next) {
  // Get a token from header
  const token = req.header('x-auth-token');

  // Check if not token
  if (!token) {
    // status 401 is unauthorized request
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  // if there is a token, we need to verify it
  try {
    const decoded = jwt.verify(token, config.get('jwtSecret'));

    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};
