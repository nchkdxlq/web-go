
class TrunkedBodyParser {

  constructor() {
    this.WAITING_LENGTH = 0;
    this.WAITING_LENGTH_LINE_END = 1;
    this.READING_TRUNK = 2;
    this.WAITING_TRUNK_LINE_END = 3;
    this.WAITING_BODY_END = 4;
    this.WAITING_BODY_LINE_END = 5;
    this.BODY_END = 6;

    this.length = 0;
    this.buffer  = [];

    this.current = this.WAITING_LENGTH;
  }


  receivedChar(char) {
    // console.log(JSON.stringify(char));

    if (this.current === this.WAITING_LENGTH) {
      if (char === '\r') {
        this.current = this.WAITING_LENGTH_LINE_END;
      } else {
        // length 为 16进制
        this.length *= 16;
        this.length += parseInt(char, 16);
      }
    }
    else if (this.current === this.WAITING_LENGTH_LINE_END) {
      if (char === '\n') {
        console.log('trunk length = ', this.length);

        this.current = this.length === 0 ? this.WAITING_BODY_END : this.READING_TRUNK;
      }
    }
    else if (this.current === this.READING_TRUNK) {
      if (this.length === 0) {
        this.current = this.WAITING_TRUNK_LINE_END;
        return;
      }
      this.buffer.push(char);
      this.length--;
    }
    else if (this.current === this.WAITING_TRUNK_LINE_END) {
      if (char === '\n') { // 一个trunk读取完成，读下一个trunk
        this.current = this.WAITING_LENGTH;
      }
    } else if (this.current === this.WAITING_BODY_END) {
      if (char === '\r') {
        this.current = this.WAITING_BODY_LINE_END;
      }
    } else if (this.current === this.WAITING_BODY_LINE_END) {
      if (char === '\n') {
        this.current = this.BODY_END;
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

module.exports = TrunkedBodyParser;