const { Sequelize, Model } = require('sequelize');
const { sequelize } = require('../../core/db');


class Book extends Model {
}

Book.init({
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING(128),
    unique: true,
  },
}, { sequelize, tableName: 'book' });


module.exports = Book;


