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

// 让sequelize在数据库里创建模型
sequelize.sync();

module.exports = {
  sequelize,
};
