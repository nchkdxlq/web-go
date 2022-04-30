import "./datatype/Interface"
import { sumB, helloB } from "./Module/b"
import { unionTypeEntry } from "./datatype/UnionTypes"
let hello: string = 'hello typescript';
document.querySelectorAll('.app')[0].innerHTML = hello;


sumB(1, 2);
helloB("TypeScript");
unionTypeEntry();
