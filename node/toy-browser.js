const net = require('net');
const { parse } = require('path');
const { throws } = require('assert');



function createConnectionIfNeeded() {

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




class Request {

  constructor(options) {
    this.method = options.method || 'GET';
    this.host = options.host;
    this.path = options.path;
    this.port = options.port || 80;
    this.body = options.body || {};
    this.headers = options.headers || {};

    if (!this.headers['Content-Type']) {
      this.headers['Content-Type'] = 'application/x-www-from-urlencoded';
    }

    if (this.headers['Content-Type'] === 'application/json') {
      this.bodyText = JSON.stringify(this.body);
    } else if (this.headers['Content-Type'] === 'application/x-www-from-urlencoded') {
      this.bodyText = Object.keys(this.body).map( key => `${key}=${encodeURIComponent(this.body[key])}`).join('&');
    }

    this.headers['Content-Length'] = this.bodyText.length;
  }

  toString() {
    const line = `${this.method} ${this.path} HTTP/1.1`;
    let header = Object.keys(this.headers)
      .map( key => `${key}: ${this.headers[key]}` )
      .join('\r\n');
    return line + '\r\n' + header + '\r\n\r\n' + this.bodyText;
  }

  async send(connection) {
    return new Promise((resolve, reject) => {
      if (!connection) {
        connection = net.createConnection({
          host: this.host,
          port: this.port
        }, () => {
          console.log('connected to server');
        });
      }
      const parser = new ResponseParser();

      connection.on('data', (data) => {
        parser.receivedData(data);

        if (parser.isFinished) {
          connection.end();
        }
      });

      connection.on('error', (error) => {
        console.log('request error');
        reject(error);
      });

      connection.on('end', () => {
        resolve(parser);
        console.log('disconnected server');
      });

      connection.write(this.toString());
    });
  }

}

class Response {

}

class ResponseParser {

  constructor() {
    this.WAITING_STATUS_LINE = 0;
    this.WAITING_STATUS_LINE_END = 1;
    this.WAITING_HEADERS_NAME = 2;
    this.WAITING_HEADERS_SPACE = 3;
    this.WAITING_HEADERS_VALUE = 4;
    this.WAITING_HEADERS_LINE_END = 5;
    this.WAITING_HEADERS_BLOCK_END = 6;
    this.WAITING_BODY = 7;

    this.current = this.WAITING_STATUS_LINE;
    this.statusLine = '';
    this.headers = {};
    this.headerName = '';
    this.headerValue = '';
    this.bodyParser = null;

  }

  get isFinished() {
    return this.bodyParser && this.bodyParser.isFinished;
  }

  get response() {
    this.statusLine.match(/HTTP\/1.1 ([0-9]+) ([\s\S]+)/);
    return {
      code: RegExp.$1,
      message: RegExp.$2,
      header: this.headers,
      body: this.bodyParser.content
    };
  }

  toString() {
    let header = Object.keys(this.headers)
      .map( key => `${key}: ${this.headers[key]}` )
      .join('\n');
    return this.statusLine + '\n' + header + '\n' + this.bodyParser.content;
  }


  receivedData(data) {
    const string = data.toString();
    for (let i = 0; i < string.length; i++) {
      this.receiveChar(string.charAt(i));
    }
  }

  receiveChar(char) {
    if (this.current === this.WAITING_STATUS_LINE) {
      if (char === '\r') {
        this.current = this.WAITING_STATUS_LINE_END;
      } else {
        this.statusLine += char;
      }
    } 
    else if (this.current === this.WAITING_STATUS_LINE_END) {
      if (char === '\n') {
        this.current = this.WAITING_HEADERS_NAME;
      }
    } 
    else if (this.current === this.WAITING_HEADERS_NAME) {
      if (char === ':') {
        this.current = this.WAITING_HEADERS_SPACE;
      } else if (char === '\r') { 
        // 当一个header结束后，如果下一行还在一个header, 那么char就是普通字符，
        // 如果是最后一个header，下一个字符就是header的结束符 `\r`
        this.current = this.WAITING_HEADERS_BLOCK_END;
      }
       else {
        this.headerName += char;
      }
    } 
    else if (this.current === this.WAITING_HEADERS_SPACE) {
      if (char == ' ') {
        this.current = this.WAITING_HEADERS_VALUE;
      }
    }
    else if (this.current === this.WAITING_HEADERS_VALUE) {
      if (char === '\r') {
        this.headers[this.headerName] = this.headerValue;
        this.headerName = '';
        this.headerValue = '';
        this.current = this.WAITING_HEADERS_LINE_END;
      } else {
        this.headerValue += char;
      }
    }
    else if (this.current === this.WAITING_HEADERS_LINE_END) {
      if (char === '\n') {
        this.current = this.WAITING_HEADERS_NAME;
      }
    }
    else if (this.current === this.WAITING_HEADERS_BLOCK_END) {
      if (char !== '\n') return;

      this.current = this.WAITING_BODY;
      if (this.headers['Transfer-Encoding'] === 'chunked') {
        this.bodyParser = new TrunkedBodyParser();
      }
    }
    else if (this.current === this.WAITING_BODY) {
      this.bodyParser.receiveChar(char);
    }
  }

}



class TrunkedBodyParser {

  constructor() {
    this.WAITING_LENGTH = 0;
    this.WAITING_LENGTH_LINE_END = 1;
    this.READING_TRUNK = 2;
    this.TRUNK_LINE_END = 3;
    this.BODY_END = 4;

    this.length = 0;
    this.buffer  = [];

    this.current = this.WAITING_LENGTH;
  }


  receiveChar(char) {
    console.log(JSON.stringify(char));

    if (this.current === this.WAITING_LENGTH) {
      if (char === '\r') {
        this.current = this.WAITING_LENGTH_LINE_END;
      } else {
        this.length *= 10;
        this.length += char.charCodeAt(0) - 48;
      }
    }
    else if (this.current === this.WAITING_LENGTH_LINE_END) {
      if (char === '\n') {
        console.log('trunk length = ', this.length);

        this.current = this.length === 0 ? this.BODY_END : this.READING_TRUNK;
      }
    }
    else if (this.current === this.READING_TRUNK) {
      if (this.length === 0) {
        this.current = this.TRUNK_LINE_END;
        return;
      }
      this.buffer.push(char);
      this.length--;
    }
    else if (this.current === this.TRUNK_LINE_END) {
      if (char === '\n') { // 一个trunk读取完成，读下一个trunk
        this.current = this.WAITING_LENGTH;
      }
    } else if (this.current === this.BODY_END) {
      if (char === '\r') {
        console.log('parse body finished');
      }
    }

  }

  get isFinished() {
    return this.current === this.BODY_END;
  }

  get content() {
    return this.buffer.join('');
  }
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
    path: '/test',
    body: {
      name: 'node'
    }
  });

  console.log('\n------------ request -------------');
  console.log(request.toString());

  const parser = await request.send();
  console.log('\n------------ line -------------');
  console.log(parser.statusLine);

  console.log('\n------------ headers -------------');
  console.log(parser.headers);

  console.log('\n------------ response -------------');
  console.log(parser.response);

}

request2();






