const Router = require('koa-router');

const ClassService = require('../../services/classic');
const router = new Router({
  prefix: '/api/v1/classic'
});

router.get('/latest', async (ctx) => {
  const art = await ClassService.getLatest();
  ctx.body = art;
});

module.exports = router;
