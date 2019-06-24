const { Sequelize, Model } = require('sequelize');
const { sequelize } = require('../../core/db');

class User extends Model {

}

User.init({
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nickname: Sequelize.STRING(128),
  email: {
    type: Sequelize.STRING(128),
    unique: true,
  },
  password: Sequelize.STRING,
  openid: {
    type: Sequelize.STRING,
    unique: true,
  },
}, { sequelize, tableName: 'user' });


module.exports = User;


