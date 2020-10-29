const path = require('path');

const basePath = '/User/Konx';
const name = 'abc.txt';

const filePath = path.resolve(basePath, name);
console.log(filePath);