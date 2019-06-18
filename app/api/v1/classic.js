const Router = require('koa-router');
const router = new Router();

router.get('/api/v1/classic/latest', async (ctx, next) => {
  ctx.body = {
    "content": "人生不能像做菜，把所有的料准备好才下锅",
    "fav_nums": 0,
    "id": 1,
  }
})

module.exports = router;
