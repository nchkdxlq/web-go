const net = require('net');
const Request = require('./Request');
const { parseHTML } = require('./parser/HTMLParser');
// import { parseHTML } from './parser/HTMLParser';

function createConnection() {

  const connection = net.createConnection({
    host: '127.0.0.1',
    port: '8080'}, () => {
      console.log('connected to server!');
  });

  connection.on('end', () => {
    console.log('connection disconnected');
  });

  return connection;
}

function request1() {
  const body = 'name=node';

  // request line
  connection.write('GET / HTTP/1.1\r\n');

  // request header
  connection.write('Content-Type: application/x-www-form-urlencoded\r\n');
  connection.write(`Content-Length: ${body.length}\r\n\r\n`);

  // request body
  connection.write(body);
}

async function request2() {
  const request = new Request({
    method: 'GET',
    host: '127.0.0.1',
    port: 8080,
    path: '/html',
    body: {
      name: 'node'
    }
  });

  console.log('\n------------ request -------------');
  console.log(request.toString());

  const connection = createConnection();

  // Response类型 对象
  const response = await request.send(connection);
  console.log('\n------------ line -------------');
  console.log(response.statusLine);

  console.log('\n------------ headers -------------');
  console.log(response.headers);

  console.log('\n------------ response -------------');
  console.log(response.toString());

  parseHTML(response.body);
}

request2();






