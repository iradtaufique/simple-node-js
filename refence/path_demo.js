// importing module colled path

const path = require('path');

// getting the Base file name
console.log('This is file name:',path.basename(__filename));

// get extension name
console.log('This is the extension name:',path.extname(__filename));

// get directory name
console.log('This is the directory name:',path.dirname(__filename));

// using join method

console.log('using join to join test with hello.js',path.join(__dirname, 'test', 'hello.js'))