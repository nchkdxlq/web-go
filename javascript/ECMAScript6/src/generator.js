
// 生成器
function* foo() {
  yield 'Hello';
  yield 'World';
  yield 'JavaScript';
}

// iterator 迭代器
const result = foo();
console.log(result);

const res1 = result.next();
console.log(res1);

const res2 = result.next();
console.log(res2);

const res3 = result.next();
console.log(res3);