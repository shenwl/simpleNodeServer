const HttpException = require('./httpException');

const ERROR_CODE = 40400;

class ResourceNotFoundError extends HttpException {
  constructor(msg = '资源未找到') {
    super(404, ERROR_CODE, msg);
  }
}

module.exports = ResourceNotFoundError;
