const Router = require('koa-router');

const { SuccessException } = require('../../../exceptions');
const { RegisterValidator } = require('../../validators');
const User = require('../../models/user');

const router = new Router({
  prefix: '/v1/user'
});

router.post('/register', async (ctx) => {
  const params = await new RegisterValidator().validate(ctx);

  const user = {
    email: params.get('body.email'),
    password: params.get('body.password'),
    nickname: params.get('body.nickname'),
  };
  await User.create(user);
  throw new SuccessException('创建成功');
});

module.exports = router;
