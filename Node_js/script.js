// let n = 5;
// for(let i=0; i<n; i++) {
//     console.log("hello ", i);
// }
// console.log("bye");

// console.log(process.argv);

// let args = process.argv;
// for(let i=2; i<args.length; i++) {
//     console.log("Hello & welcome ", args[i]);
// }

// const math = require("./math");
// console.log(math);
// console.log(math.sum(2, 4));
// console.log(math.PI);
// console.log(math.age);


// const info = require("./Fruits");
// console.log(info);


// const figlet = require("figlet");

// figlet("Ajeet Giri", function (err, data) {
//   if (err) {
//     console.log("Something went wrong...");
//     console.dir(err);
//     return;
//   }
//   console.log(data);
// });



import {sum, PI} from "./math.js";
console.log(sum(1, 2));
console.log(PI);