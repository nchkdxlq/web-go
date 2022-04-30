


/*

--strictNullChecks标记可以解决此错误：当你声明一个变量时，它不会自动地包含 null或 undefined。 
你可以使用联合类型明确的包含它们：

*/
{
  let s = "foo";
  // s = null; // 错误。不能将类型“null”分配给类型“string”

  let sn: string | null = "foo";
  sn = null; // 可以
  // sn = undefined; // 错误。 不能将类型“undefined”分配给类型“string | null”

}

// 可选参数 使用了 `--strictNullChecks`，可选参数会被自动地加上 `| undefined`:

function f(x: number, y?: number) {
  return x + (y || 0);
}

f(1, 2);
f(1);
f(1, undefined);
// f(1, null); // error, 'null' is not assignable to 'number | undefined'

// 可选属性

class C {
  a: number;
  b?: number;

  constructor(a: number) {
    this.a = a;
  }
}

let ob = new C(1);
ob.a = 2;
// ob.a = undefined; //  error, 'undefined' is not assignable to 'number'

ob.b = undefined; // ok
// ob.b = null; // error, 'null' is not assignable to 'number | undefined'

