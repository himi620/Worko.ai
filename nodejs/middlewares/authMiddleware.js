const basicAuth = require('basic-auth');
const dotenv = require('dotenv');

dotenv.config();

const authMiddleware = (req, res, next) => {
  const user = basicAuth(req);
  if (!user || !user.name || !user.pass) {
    res.set('WWW-Authenticate', 'Basic realm="example"');
    return res.status(401).json({ message: 'Authentication required' });
  }

  if (user.name === process.env.AUTH_USER && user.pass === process.env.AUTH_PASS) {
    return next();
  } else {
    res.set('WWW-Authenticate', 'Basic realm="example"');
    return res.status(401).json({ message: 'Invalid credentials' });
  }
};

module.exports = authMiddleware;
