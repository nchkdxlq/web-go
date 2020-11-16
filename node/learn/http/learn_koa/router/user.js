const Router = require('koa-router');


const router = new Router({prefix: '/user'});

router.get('/list', (ctx, next) => {
  ctx.response.body = 'Hello Koa Router';
});

// Content-Type:application/json 参数解析 (koa-bodyparse解析)
router.post('/register', (ctx, next) => {
  console.log(ctx.request.body);
  ctx.response.body = 'register success~';
});

// Content-Type:form-urlencoded 参数解析 (koa-bodyparse解析)
router.post('/update', (ctx, next) => {
  console.log(ctx.request.body);
  ctx.response.body = 'update success~';
});

// Content-Type:form-data 解析 (koa-multer框架解析)
router.post('/avatar', (ctx, next) => {
  console.log(ctx.req.body);
  ctx.response.body = 'upload success~';
});

/**
 * params query 参数解析
 * url: /user/abc?name=admin&age=20
 * 不需要借助框架解析
*/
router.get('/:id', (ctx, next) => {
  console.log('url', ctx.request.url);
  console.log('params', ctx.request.params);
  console.log('query', ctx.request.query);
  ctx.response.body = '用户详情';
});


module.exports = router;