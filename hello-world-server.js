var http = require('http');
const PORT = 8080;
const HOST = '0.0.0.0';
http.createServer(function handler(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('ALL GOOD welcome to dev ops world\n');
}).listen(PORT, HOST);
console.log('Server running at http://${HOST}:${PORT/');
