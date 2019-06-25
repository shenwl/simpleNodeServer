const bcrypt = require('bcryptjs');
const Router = require('koa-router');

const { RegisterValidator } = require('../../validators');
const User = require('../../models/user');

const router = new Router({
  prefix: '/api/v1/user'
});

const hashPassword = (password) => {
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(password, salt);
};

router.post('/register', async (ctx) => {
  const params = await new RegisterValidator().validate(ctx);

  const pwd = hashPassword(params.get('body.password'));
  const user = {
    email: params.get('body.email'),
    password: pwd,
    nickname: params.get('body.nickname'),
  };
  await User.create(user);
});

module.exports = router;
