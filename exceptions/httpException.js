class HttpException extends Error {
  constructor(httpCode, errorCode, msg) {
    super(`HTTP ERROR: ${msg}`);
    this.code = httpCode;
    this.errorCode = errorCode;
    this.msg = msg;
  }
}

module.exports = HttpException;
