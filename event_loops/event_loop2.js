const fs = require('fs')
const a = 100;

setImmediate(() => console.log('setImmediate'));

Promise.resolve().then(() => console.log("Promises"));

fs.readFile("../file.txt", "utf-8", (err, data) => {
    if(data){
        console.log(data);
    } else {
        console.log(err);
    }
})

setTimeout(() => console.log('setTimeout'));

process.nextTick(() => console.log('process.nextTick'));

function print(){
    console.log(a);
}

print();

