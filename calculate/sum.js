// Modules by default protect their variables & functions from leaking
// so use export for using variables & functions for using them in another modules.

// console.log('module for summation of numbers');

var title = 'module for summation of numbers';

function sum(a,b){
    let result = a + b;
    console.log(result);
}

module.exports = { sum, title };