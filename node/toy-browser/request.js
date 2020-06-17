const ResponseParser = require('./parser/ResponseParser');

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
        resolve(parser.response);
        console.log('disconnected server');
      });

      connection.write(this.toString());
    });
  }
}

module.exports = Request;