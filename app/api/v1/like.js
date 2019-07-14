const Router = require('koa-router');
const Favor = require('../../models/favor');
const { LikeValidator }  = require('../../validators');
const { SuccessException } = require('../../../exceptions');

const router = new Router({
  prefix: '/v1/like'
});

router.get('/', async ctx => {
  const v = await new LikeValidator().validate(ctx);
  await Favor.like(
    v.get('body.artId'),
    v.get('body.type'),
    ctx.auth.id
  );
  SuccessException('点赞成功');
});


router.get('/cancel', async ctx => {
  const v = await new LikeValidator().validate(ctx);
  await Favor.dislike(
    v.get('body.artId'),
    v.get('body.type'),
    ctx.auth.id
  );
  SuccessException('取消点赞成功');
});

module.exports = router;
