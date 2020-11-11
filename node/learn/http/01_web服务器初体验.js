const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Hello Server');
});

server.listen(8000, '127.0.0.1', () => {
  console.log('服务器启动成功');
});