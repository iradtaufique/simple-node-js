const http = require('http');

// creating server objects

http.createServer((request, response) => {
    // writting resposne
    response.write('Yeah Your Server is runnig!!!');
    response.end();
}).listen(5000, () => console.log('Server is Running....'));
