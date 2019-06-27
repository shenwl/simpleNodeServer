const configSecret = require('./config.secret');

module.exports = {
  // prod or dev
  environment: 'dev',
  ...configSecret,
};
