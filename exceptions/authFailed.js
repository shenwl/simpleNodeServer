const HttpException = require('./httpException');

const ERROR_CODE = 10004;

class AuthFailed extends HttpException {
  constructor(msg = '授权失败') {
    super(401, ERROR_CODE, msg);
  }
}

module.exports = AuthFailed;
