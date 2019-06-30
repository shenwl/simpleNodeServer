const { ART } = require('../constants/enum');
const Flow = require('../models/flow');
const Movie = require('../models/movie');
const Music = require('../models/music');
const Sentence = require('../models/sentence');

class ClassicService {
  static async getLatest() {
    const flow = await Flow.findOne({
      order: [
        ['index','DESC']
      ]
    });

    const type = flow.type;
    const artId = flow.artId;

    let art = null;
    const artFinder = {
      where: {
        id: artId,
      }
    };

    if(type === ART.MOVIE) {
      art = await Movie.findOne(artFinder);
    }
    if(type === ART.MUSIC) {
      art = await Music.findOne(artFinder);
    }
    if(type === ART.SENTENCE) {
      art = await Sentence.findOne(artFinder);
    }

    art && art.setDataValue('index', flow.index);
    return art;
  }
}

module.exports = ClassicService;
