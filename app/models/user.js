const bcrypt = require('bcryptjs');

const { Sequelize, Model } = require('sequelize');
const { sequelize } = require('../../core/db');

const hashPassword = (password) => {
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(password, salt);
};

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
  password: {
    type: Sequelize.STRING,
    set(val) {
      const pwd = hashPassword(val);
      this.setDataValue('password', pwd);
    },
  },
  openid: {
    type: Sequelize.STRING,
    unique: true,
  },
}, { sequelize, tableName: 'user' });


module.exports = User;


