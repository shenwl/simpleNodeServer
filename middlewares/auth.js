const basicAuth = require('basic-auth');
const jwt = require('jsonwebtoken');

const { Forbbiden } = require('../exceptions');

async function auth(ctx, next) {
  const userToken = basicAuth(ctx.req);
  if(!userToken || !userToken.name) throw new Forbbiden('token不合法');

  try {
    const decode = jwt.verify(userToken.name, global.config.security.secretKey);
    const { uid, scope } = decode || {};

    ctx.auth = {
      uid,
      scope,
    };
  } catch (error) {
    if(error.name === 'TokenExpired') {
      throw new Forbbiden('token过期');
    }
    throw new Forbbiden('token不合法');
  }

  await next();
}

module.exports = auth;
