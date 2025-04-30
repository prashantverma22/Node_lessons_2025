require('./module') // to include a module inside another module

// const obj = require('./sum');
// const { sum, title } = require('./sum');

const { multiply, sum } = require('./calculate/index');  


var series = 'nodejs';

// console.log(series);

// console.log("global", global);
// console.log("this", this);

console.log(globalThis === global);

// console.log(obj.title)
// obj.sum(10,20);

// console.log(title)
sum(10,20);
multiply(10,20);


