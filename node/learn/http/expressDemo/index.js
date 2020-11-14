const express = require('express');
const multer = require('multer');

const userRouter = require('./routers/users');


// express其实是一个函数, createApplication
const app = express();

// Content-Type: application/json 时
app.use(express.json());

app.use(express.static('./build'));

/**
 * Content-Type: x-wwww-form-urlencoded
 * extended:
 * true: 使用第三方框架qs框架解析 
 * false: 使用node内置的querystring解析
 **/ 
app.use(express.urlencoded({extended:true}));



// 注册路由
app.use('/user', userRouter);

/**
 * Content-Type: form-data
 * */ 
const upload = multer();

app.use('/home', (req, res, next) => {
  console.log('home middleware 01');
  next();
});

app.use('/home', (req, res, next) => {
  console.log('home middleware 02');
  res.end('home middleware');
});

//3. 路径和方法都匹配的中间件
app.post('/login', (req, res, next) => {
  console.log(req.body);
  res.end('path & method login middleware');
});

// Content-Type: form-data
app.post('/register', (req, res, next) => {
  console.log('register info', req.body);
  res.end('用户注册成功');
});


// 开启监听
app.listen(8000, () => {
  console.log('express server started');
});