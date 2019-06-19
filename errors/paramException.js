const HttpException = require('./httpException');

const ERROR_CODE = 40000;

class HttpRequestParamError extends HttpException {
  constructor(paramName, desc = '参数错误', msg = '参数不合法') {
    super(200, desc, ERROR_CODE, `${paramName}参数错误: ${msg}`);
  }
}

module.exports = HttpRequestParamError;
