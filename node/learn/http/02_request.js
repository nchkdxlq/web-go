const http = require('http');
const URL = require('url');
const qs = require('querystring');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const { pathname, query } = URL.parse(req.url);
  if (pathname === '/login') {
    if (req.method === 'POST') {
      // 拿body中的数据
      req.setEncoding('utf-8');
      req.on('data', data => {
        const { username, password } = JSON.parse(data);
        console.log(username, password);
      });
    } else {
      console.log(query);
      const {username, password} = qs.parse(query);
      console.log(username, password);
    }
  } else if (pathname === '/upload') {
    if (req.method === 'POST') {
      uploadFile_v2(req, res);
      return;
    }
  }

  console.log(req.headers);

  res.end('请求结果~');
});

server.listen(8000, '0.0.0.0', () => {
  console.log('server start');
});

// 错误写法
const uploadFile_v1 = (req, res) => {
  const fileWriter = fs.createWriteStream('./foo.png', {flags: 'a+'});
  req.on('data', data => {
    fileWriter.write(data);
  });

  req.on('end', () => {
    fileWriter.close();
    console.log('文件上传结束');
    res.end('文件上传成功~');
  });
}

const uploadFile_v2 = (req, res) => {
  const fileWriter = fs.createWriteStream('./foo.png', {flags: 'a+'});
  req.on('data', data => {
    fileWriter.write(data);
  });

  req.on('end', () => {
    fileWriter.close();
    console.log('文件上传结束');
    res.end('文件上传成功~');
  });
}
