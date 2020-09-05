var http = require('http');
http.createServer(function handler(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('welcome to dev ops world\n');
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');