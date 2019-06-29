const { Model } = require('sequelize');
const { sequelize } = require('../../core/db');
const artBase = require('./artBase');

class Sentence extends Model {
}

Sentence.init({
  ...artBase,
}, { sequelize, tableName: 'sentence' });

module.exports = Sentence;


