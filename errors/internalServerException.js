const HttpException = require('./httpException');

const ERROR_CODE = 50000;

class InternalServerError extends HttpException {
  constructor(msg) {
    super(500, '服务器好像开小差了', ERROR_CODE, `something wrong: ${msg}`);
  }
}

module.exports = InternalServerError;
