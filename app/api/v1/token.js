const Router = require('koa-router');
const { TokenValidator, NotEmptyValidator } = require('../../validators');
const { LOGIN_TYPES } = require('../../constants/enum');
const AUTH = require('../../constants/auth');
const User = require('../../models/user');
const WXService = require('../../services/wx');
const { ParamException } = require('../../../exceptions');
const { generateToken } = require('../../../core/utils');
const jwt = require('jsonwebtoken');

function verifyToken(token) {
  try {
    jwt.verify(token, global.config.security.secretKey);
    return true;
  } catch(e) {
    return false;
  }
}

const router = new Router({
  prefix: '/api/v1/token'
});

router.post('/', async (ctx) => {
  const params = await new TokenValidator().validate(ctx);
  const type = params.get('body.type');
  const account = params.get('body.account');
  const secret = params.get('body.secret');

  const typeHandlers = {
    [LOGIN_TYPES.USER_EMAIL]: async (email, password) => {
      const user = await User.verifyEmailPassword(email, password);
      return generateToken(user.id, AUTH.USER);
    },
    [LOGIN_TYPES.ADMIN_EMAIL]: async (email, password) => {
      const user = await User.verifyEmailPassword(email, password);
      return generateToken(user.id, AUTH.ADMIN);
    },
    [LOGIN_TYPES.USER_MINI_PROGRAM]: async (account) => {
      return WXService.codeToToken(account);
    },
  };

  const handler = typeHandlers[type];
  if(!handler) throw new ParamException('无法处理该type');

  const token = await handler(account, secret);

  ctx.body = {
    token
  };
});

router.post('/verify', async (ctx) => {
  const params = await new NotEmptyValidator().validate(ctx);
  const token = params.get('body.token');
  ctx.body = {
    result: verifyToken(token)
  };
});

module.exports = router;
