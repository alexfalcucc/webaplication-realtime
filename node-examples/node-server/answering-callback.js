var http = require('http');

var answeringRequest = function(req, res) {
  res.writeHead(200, {"content-Type": "text/html"});
  res.write("<h1>Hello World two from node.js!</h1>");
  res.end();
}

var server = http.createServer(answeringRequest);

var serverTellme = function() {
  console.log('Server Hellow World working!');
}

server.listen(3000, serverTellme);