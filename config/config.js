const wx = require('./wx');

module.exports = {
  // prod or dev
  environment: 'dev',
  database: {
    dialect: 'mysql',
    dbName: 'island',
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: '960208',
  },
  security: {
    secretKey: 'i8vD8orMeiWwkvwLgKynTD',
    expiresIn: 60 * 60 * 2,
  },
  wx,
};
