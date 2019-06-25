const HttpException = require('./httpException');

const ERROR_CODE = 0;

class successException extends HttpException {
  constructor(msg = 'ok') {
    super(201, ERROR_CODE, msg);
  }
}

module.exports = successException;
