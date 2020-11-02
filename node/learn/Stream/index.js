const fs = require('fs');

// fs.readFile('./data.txt', {encoding:'utf-8'}, (err, data) => {
//   console.log(data);
// });

function test_readStream() {
  const readStream = fs.createReadStream('./data.txt', {
    encoding: 'utf-8',
    start: 3,
    end: 10,
    highWaterMark: 2
  });
  
  
  readStream.on('data', data => {
    console.log(data);
    readStream.pause();
    setTimeout(() => {
        readStream.resume();
    }, 1000);
  });
  
  
  readStream.on('open', () => {
    console.log('open file');
  });
  
  readStream.on('close', () => {
    console.log('close file');
  });
}


// test_readStream();


function test_writeStream() {
  const writeStream = fs.createWriteStream('./bar.txt', {
    flags: 'a',
    start: 4
  });
  
  writeStream.write('你好啊', err => {
    if (err) {
      console.log(err);
    } else {
      console.log('写入成功');
    }
  });

  writeStream.close();
}

test_writeStream();