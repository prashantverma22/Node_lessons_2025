const fs = require('fs');
const https = require('https');

const { multiply } = require('./calculate/mult');

console.log('Learning nodejs');

var a = 100;
var b = 200;

//try to avoid blocking fn calls
// fs.readFileSync('./file.txt', "utf-8"); // blocking task, i.e. will block the main thread. 

// This will only be pushed to call stack in v8 once the call stack gets empty 
setTimeout(() => {
    console.log("call me ASAP.")
}, 0);

setTimeout(() => {
    console.log("runs after 3 seconds....")
}, 3000);

https.get('https://dummyjson.com/products/1', (res) => {
    console.log('fetched data successfully..')
})

fs.readFile("./file.txt", "utf-8", (err, data) => {
    if(data){
        console.log(data);
    } else {
        console.log(err);
    }
})

multiply(a,b);

//console output:--
// Learning nodejs
// 2000
// file data
// API call
// setTimeout


