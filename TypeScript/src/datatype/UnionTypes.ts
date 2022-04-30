


/*

联合类型表示一个变量可以是几种类型之一。使用( | )分隔每个类型。
所以 `number | string | boolean`表示这个变量可以保存number、string、boolean 类型的值

*/

export function unionTypeEntry() {
  padLeft("padLeft", 2);
  try {
    padLeft("padLeft", true);
  } catch (error) {
    console.log(error);
  }
  padRight("union type", 1024);
}

function padLeft(value: string, padding: any) {
  if (typeof padding === "number") {
    return Array(padding + 1).join(" ") + value;
  } else if (typeof padding === "string") {
    return padding + value;
  }
  throw new Error(`Expected string or number, got'${padding}'.`)
}


function padRight(value: string, padding: string | number) {
  if (typeof padding === "string") {
    console.log("value is string")
  } else if (typeof padding === "number") {
    console.log("value is number")
  }
}

{
  //  typeof 类型保护

  let isNumber = (x: any) => {
    return typeof x === "number"
  }
  console.log(isNumber(1));

  let isString = (x: any) => {
    return typeof x === "string"
  }
  console.log(isString("ok"));

}

{
  /*
    instanceof 类型保护
    instanceof类型保护是通过构造函数来细化类型的一种方式。
  */

}
