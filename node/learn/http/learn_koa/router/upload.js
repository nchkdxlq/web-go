const Router = require('koa-router');

const router = new Router({prefix:'/upload'})

router.post('/image', (ctx, ) => {
  console.log(ctx.req.file);
  ctx.response.body = 'upload image success~';
});


module.exports = router;