const TrunkedBodyParser = require('./TrunkedBodyParser');

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
      this.bodyParser.receivedChar(char);
    }
  }

}


module.exports = ResponseParser;