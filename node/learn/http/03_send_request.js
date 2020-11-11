const http = require('http');



function send_client_get_request() {
  http.get('http://127.0.0.1:8000', res => {
    res.on('data', data => {
      console.log(data.toString());
    });
  
    res.on('end', () => {
      console.log('end');
    });
  });
}
// send_client_get_request();

function send_client_post_request() {
  const req = http.request({
    hostname: '127.0.0.1',
    port: 8000,
    method: 'POST'
  }, res => {
    res.on('data', data => {
      console.log(data.toString());
    });

    res.on('end', () => {
      console.log('end');
    });
  });

  // 发送请求
  req.end();
}
send_client_post_request();