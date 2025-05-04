const fs = require('fs');
const crypto = require('crypto');

// process.env.UV_THREADPOOL_SIZE = 2;

crypto.pbkdf2('password', 'salt', 500000, 50, `sha512`, () => {
    console.log("password hashed - 1");
});

// fs.readFile("./file.txt", "utf-8", () => {
//     console.log('file read..')
// })

crypto.pbkdf2('password', 'salt', 500000, 50, `sha512`, () => {
    console.log("password hashed - 2");
});

crypto.pbkdf2('password', 'salt', 500000, 50, `sha512`, () => {
    console.log("password hashed - 3");
});

crypto.pbkdf2('password', 'salt', 500000, 50, `sha512`, () => {
    console.log("password hashed - 4");
});

crypto.pbkdf2('password', 'salt', 500000, 50, `sha512`, () => {
    console.log("password hashed - 5");
});