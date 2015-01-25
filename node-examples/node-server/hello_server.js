/*
  Classic and simple example of a server node.js. 
  He's on listened from port 3000, in html format.
*/

var http = require('http');

var server = http.createServer(function (req, res) {
  res.writeHead(200, {"Content-Type": "text/html"});
  res.write("<h1>Hello World from Node.js :)</h1");
  res.end();
});

server.listen(3000);