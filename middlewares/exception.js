const HttpException = require('../exceptions/httpException');

const catchError = async (ctx, next) => {
  try {
    await next();
  } catch (error) {
    if (error instanceof HttpException) {
      ctx.body = {
        msg: error.msg,
        errorCode: error.errorCode,
        httpMsg: error.httpMsg,
      };
      ctx.status = error.code;
    } else {
      if(global.config.environment === 'dev') throw error;

      ctx.body = {
        msg: '未知异常',
        errorCode: -10001,
        httpMsg: '未知异常',
      };
      ctx.status = 500;
    }
  }
};

module.exports = catchError;
