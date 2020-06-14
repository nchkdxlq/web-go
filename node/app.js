
// 1. 导入http包
const http = require('http');
const fs = require('fs');

// 2. 创建服务器
const server = http.createServer(function (request, response) {
  // 设置响应头，用来表示返回内容显示的格式

  if (request.url == '/rect') {
    fs.readFile('./test/rect.html', function (err, data) {
      if (err) {
        throw err;
      }

      response.writeHead(200, {'Content-Type':'text/html;charset=UTF8'});
      response.end(data);
    });

  } else if (request.url == '/circle') {
    fs.readFile('./test/circle.html', function(error, data) {
      if (error) {
        throw error;
      }

      response.writeHead(200, {'Content-Type':'text/html;charset=UTF8'});
      response.end(data);
    });
  } else {
    fs.readFile('./test/404.html', function(error, data) {
      if (error) {
        throw error;
      }
      response.writeHead(200, {'Content-Type':'text/html;charset=UTF8'});
      response.end(data);
    });
  }


  /*
    在node.js中凡是是资源文件必须设置路由，
    属于资源文件：1.html文件 2.图片 3.css
  
    在node.js中没有web容器的概念，

  */
});

// 3. 监听
server.listen(8080, '127.0.0.1');



