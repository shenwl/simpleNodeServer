const Router = require('koa-router');

const auth = require('../../../middlewares/auth');
const AUTH = require('../../constants/auth');
const router = new Router({
  prefix: '/api/v1/classic'
});

router.get('/latest', auth(AUTH.ADMIN), async (ctx) => {
  ctx.body = {
    "content": "人生不能像做菜，把所有的料准备好才下锅",
    "fav_nums": 0,
    "id": 1,
  };
});

module.exports = router;
