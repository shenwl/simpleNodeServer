const HttpException = require('./httpException');

const ERROR_CODE = 40003;

class Forbbiden extends HttpException {
  constructor(msg = '无权限') {
    super(403, ERROR_CODE, msg);
  }
}

module.exports = Forbbiden;
