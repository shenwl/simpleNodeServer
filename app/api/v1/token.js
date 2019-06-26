const Router = require('koa-router');
const { TokenValidator } = require('../../validators');
const { LOGIN_TYPES } = require('../../constants/enum');
const User = require('../../models/user');
const { ParamException } = require('../../../exceptions');
const { generateToken } = require('../../../core/utils');

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
      return generateToken(user.id, 2);
    }
  };

  const handler = typeHandlers[type];
  if(!handler) throw new ParamException('无法处理该type');

  const token = await handler(account, secret);

  ctx.body = {
    token
  };
});

module.exports = router;
