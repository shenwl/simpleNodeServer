class HttpException extends Error {
  constructor(httpStatusCode, httpMsg, errorCode, msg) {
    super(`HTTP ERROR: ${msg}`);
    this.code = httpStatusCode;
    this.httpMsg = httpMsg;
    this.errorCode = errorCode;
    this.msg = msg;
  }
}

module.exports = HttpException;
