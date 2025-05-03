const fs = require('fs')

setImmediate(() => console.log('setImmediate'));

setTimeout(() => console.log('first timer'), 0);

Promise.resolve().then(() => console.log("Promises"));

fs.readFile("../file.txt", "utf-8", () => {
    setTimeout(() => console.log('second timer'), 0);

    process.nextTick(() => console.log('process.nextTick in fs'));

    setImmediate(() => console.log('setImmediate in fs'));
    console.log('file read..')
})


process.nextTick(() => console.log('process.nextTick'));

console.log('event loop');

