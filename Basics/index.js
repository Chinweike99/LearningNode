console.log("Introduction to node");
// console.log(global);

const { add, sub, mod } = require('./math');

console.log(add(9, 5));
console.log(sub(9, 5));
console.log(mod(9, 5));


// const os = require("os");

// console.log(os.type());
// console.log(os.version());
// console.log(os.hostname());
// console.log(os.machine());
// console.log(os.uptime());
// console.log(os.endianness());
// // console.log(os.networkInterfaces());
// console.log(os.userInfo());
// console.log(os.release());
// console.log(__dirname);
// console.log(__filename);
