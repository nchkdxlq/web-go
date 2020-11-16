const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const multer = require('koa-multer');

const userRouter = require('./router/user');


const app = new Koa();

const upload = multer();

// app.use((ctx, next) => {
//   // ctx.request ctx.response
//   console.log('中间件被执行');
//   ctx.response.body = 'Hello Koa';
// });

// application/json / xxx-form-urlencoded 参数解析
app.use(bodyParser());
app.use(upload.any());

// 注册路由
app.use(userRouter.routes());
app.use(userRouter.allowedMethods());

app.listen(8000, () =>{
  console.log('koa服务器启动成功');
});