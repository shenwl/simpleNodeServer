const { Sequelize } = require('sequelize');

module.exports = {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: Sequelize.STRING,
  content: Sequelize.STRING,
  icon: Sequelize.STRING,
  pubdate: Sequelize.DATEONLY,
  favNums: Sequelize.INTEGER,
  type: Sequelize.INTEGER, // 1 movie 2 music 3 sentence
};
