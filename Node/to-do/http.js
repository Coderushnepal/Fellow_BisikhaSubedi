const http = require('http');

http.createServer((request, response) => {
    response.end('This is my first http server in Node JS');
}).listen(1234);

console.log('server running at http://127.0.0.1:1234/');