const basicAuth = require('basic-auth');
const jwt = require('jsonwebtoken');

const { Forbbiden } = require('../exceptions');

function auth(auth) {
  const authLevel = auth;

  return async (ctx, next) => {
    const userToken = basicAuth(ctx.req);
    if(!userToken || !userToken.name) throw new Forbbiden('token不合法');

    try {
      const decode = jwt.verify(userToken.name, global.config.security.secretKey);
      const { uid, scope } = decode || {};

      ctx.auth = {
        uid,
        scope,
      };

      if (scope < authLevel) throw new Forbbiden('权限不足');
    } catch (error) {
      if(error.name === 'TokenExpiredError') throw new Forbbiden('token过期');

      if(error instanceof Forbbiden) throw error;

      throw new Forbbiden('token不合法');
    }

    await next();
  };
}

module.exports = auth;
