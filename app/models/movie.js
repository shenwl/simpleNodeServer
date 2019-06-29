const { Model } = require('sequelize');
const { sequelize } = require('../../core/db');
const artBase = require('./artBase');

class Movie extends Model {
}

Movie.init({
  ...artBase,
}, { sequelize, tableName: 'movie' });

module.exports = Movie;


