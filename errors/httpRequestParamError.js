const HttpException = require('./httpException');

const ERROR_CODE = 40000;

class HttpRequestParamError extends HttpException {
  constructor(paramName, desc, msg) {
    super(200, desc, ERROR_CODE, `${paramName} wrong: ${msg}`);
  }
}

module.exports = HttpRequestParamError;
