const { Model, Sequelize } = require('sequelize');
const { sequelize } = require('../../core/db');
const artBase = require('./artBase');


class Music extends Model {
}

Music.init({
  ...artBase,
  url: Sequelize.STRING,
}, { sequelize, tableName: 'music' });

module.exports = Music;


