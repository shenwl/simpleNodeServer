const { Sequelize, Model } = require('sequelize');
const { sequelize } = require('../../core/db');
const Movie = require('./movie');
const Music = require('./music');
const Sentence = require('./sentence');
const { HttpRequestParamError } = require('../../exceptions');
const { ART } = require('../constants/enum');

const artByType = {
  [ART.MOVIE]: Movie,
  [ART.MUSIC]: Music,
  [ART.SENTENCE]: Sentence,
};

class Favor extends Model {
  static async like(artId, type, uid) {
    const favor = Favor.findOne({
      where: {
        artId,
        type,
        uid,
      }
    });
    if (favor) {
      throw new HttpRequestParamError('请勿重复点赞');
    }
    const Art = artByType[type];

    sequelize.transation(async t => {
      await Favor.create({
        artId,
        type,
        uid,
      }, { transation: t });

      const art = await Art.findOne({ where: {artId: artId} });
      await art.increment('favNums', { by: 1, transaction: t });
    });
  }

  static async dislike(artId, type, uid) {
    const favor = Favor.findOne({
      where: {
        artId,
        type,
        uid,
      }
    });
    if (!favor) {
      throw new HttpRequestParamError('未点赞');
    }
    const Art = artByType[type];

    sequelize.transation(async t => {
      await favor.destory({
        force: true,
      }, { transation: t });

      const art = await Art.findOne({ where: {artId: artId} });
      await art.decrement('favNums', { by: 1, transaction: t });
    });
  }
}

Favor.init({
  uid: Sequelize.INTEGER,
  artId: Sequelize.INTEGER,
  type: Sequelize.INTEGER,
}, { sequelize, tableName: 'favor' });


module.exports = Favor;


