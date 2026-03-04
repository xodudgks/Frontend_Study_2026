// CJS 모듈 활용 방법
// const { add, sub } = require("./math");

// ES 모듈 활용
import mul from "./math.js";
import { add, sub } from "./math.js";

// 동일한 경로면 합쳐서 import 가능
// import mul, {add, sub} from "./math.js";

// console.log(add(1, 2));
// console.log(sub(1, 2));
// console.log(mul(2, 3));

// console.log("Node.js Study");

import randomColor from "randomcolor";

const color = randomColor();
console.log(color);
