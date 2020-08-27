const path = require('path');

const resolve = dir => path.resolve(__dirname, dir);

// 配置别名
module.exports = {
  webpack: {
    alias: {
      '@': resolve('src')
    }
  }
}