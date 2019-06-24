const HttpException = require('./httpException');

const ERROR_CODE = 40000;

class HttpRequestParamError extends HttpException {
  constructor(msg = '参数错误', desc = '参数错误') {
    super(200, desc, ERROR_CODE, msg);
  }
}

module.exports = HttpRequestParamError;
