const Router = require('koa-router');
const router = new Router({
  prefix: '/api/v1/book'
});

router.get('/latest', async (ctx) => {
  ctx.body = {
    "content": "book",
    "id": 1,
  };
});

router.post('/', async (ctx) => {
  ctx.body = {
    "content": "book",
    "id": 1,
  };
});

module.exports = router;
