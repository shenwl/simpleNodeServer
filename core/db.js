const Sequelize = require('sequelize');

const {
  dialect,
  dbName,
  host,
  port,
  user,
  password,
} = require('../config/config').database;

const sequelize = new Sequelize(dbName, user, password, {
  dialect,
  host,
  port,
  logging: true,
  timezone: '+08:00',
  define: {},
});

module.exports = sequelize;
