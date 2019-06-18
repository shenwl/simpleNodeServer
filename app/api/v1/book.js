const Router = require('koa-router');
const router = new Router();

router.get('/api/v1/book/latest', async (ctx, next) => {
  ctx.body = {
    "content": "book",
    "id": 1,
  }
})

router.post('/api/v1/book', async (ctx, next) => {
  ctx.body = {
    "content": "book",
    "id": 1,
  }
})

module.exports = router;
