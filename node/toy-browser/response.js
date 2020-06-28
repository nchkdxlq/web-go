

class Response {
  
  constructor({statusLine, code, message, headers, body}) {
    this.statusLine = statusLine;
    this.code = code;
    this.message = message;
    this.headers = headers;
    this.body = body;
  }

  toString() {
    let header = Object.keys(this.headers)
      .map( key => `${key}: ${this.headers[key]}` )
      .join('\n');
    return this.statusLine + '\n' + header + '\n\n' + this.body;
  }

}

module.exports = Response;