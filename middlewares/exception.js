const HttpException = require('../errors/httpException');

const catchError = async (ctx, next) => {
  try {
    await next();
  } catch (error) {
    if (error instanceof HttpException) {
      ctx.body = {
        msg: error.msg,
        errorCode: error.errorCode,
        httpMsg: error.httpMsg,
      }
      ctx.status = error.code;
    }

    console.error(e);
  }
}

module.exports = catchError;
