const fs = require('fs')

setImmediate(() => console.log('setImmediate'));

setTimeout(() => console.log('first timer'), 0);

Promise.resolve().then(() => console.log("Promises"));

fs.readFile("../file.txt", "utf-8", () => {
    console.log('file read..')
})

process.nextTick(() => {
    // if this case it will only move forward to the next phase until all the nextTicks are executed.
    process.nextTick(() => console.log('inner one')) // this will be printed before any other phase.
    console.log("nextTick")
});

console.log('event loop');

