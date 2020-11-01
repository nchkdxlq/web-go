

// 英文字符串
const message = 'Hello World';
const buffer = Buffer.from(message, 'utf8');
console.log(buffer);

// 中文字符串
console.log('================= 中文编码 ==============');
const buf1 = Buffer.from('你好啊', 'utf8');
console.log(buf1);
console.log('decode === content:', buf1.toString());


// alloc方式创建
console.log('=============== alloc =============');

const buf2 = Buffer.alloc(5, 'a');
console.log('buf2 = ', buf2);