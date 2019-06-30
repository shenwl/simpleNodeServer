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
  define: {
    // create_time, update_time
    timestamps: true,
    // delete_time
    paranoid: true,
    underscored: true,
  },
});

// 让sequelize在数据库里创建模型
sequelize.sync({
  // model更新后删除table重建，开发时使用
  // force: true,
});

module.exports = {
  sequelize,
};
