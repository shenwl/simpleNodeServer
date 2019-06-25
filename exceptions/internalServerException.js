const HttpException = require('./httpException');

const ERROR_CODE = 50000;

class InternalServerError extends HttpException {
  constructor(msg) {
    super(50, ERROR_CODE, `服务器错误: ${msg}`);
  }
}

module.exports = InternalServerError;
