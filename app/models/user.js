const bcrypt = require('bcryptjs');

const { Sequelize, Model } = require('sequelize');
const { sequelize } = require('../../core/db');

const { AuthFailed } = require('../../exceptions');

const hashPassword = (password) => {
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(password, salt);
};

class User extends Model {
  static async verifyEmailPassword(email, plainPassword) {
    const user = await User.findOne({
      where: {
        email,
      }
    });
    if (!user) throw new AuthFailed('用户不存在');

    if (!bcrypt.compareSync(plainPassword, user.password)) {
      if (!user) throw new AuthFailed('密码错误');
    }
    return user;
  }

  static async findByOpenid(openid) {
    const user = await User.findOne({
      where: {
        openid,
      }
    });
    return user;
  }

  static async registerByOpenid(openid) {
    return await User.create({
      openid,
    });
  }
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


