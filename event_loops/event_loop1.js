const fs = require('fs')
const a = 100;

setImmediate(() => console.log('setImmediate'));

fs.readFile("../file.txt", "utf-8", (err, data) => {
    if(data){
        console.log(data);
    } else {
        console.log(err);
    }
})

setTimeout(() => console.log('setTimeout'));

function print(){
    console.log(a);
}

print();

