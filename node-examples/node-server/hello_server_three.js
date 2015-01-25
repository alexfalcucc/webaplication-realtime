var http = require('http');
var server = http.createServer(function(req, res){
  res.writeHead(200, {'Content-Type': 'text/html'});
  if(req.url == '/'){
    res.write('<h1>Home Page!!!</h1>');
  } else if(req.url == '/welcome'){
    res.write('<h1>Welcome user!!!</h1>');
  } else {
    res.write('<h1>Page not fount! :(</h1>');
  }
  res.end();
});

server.listen(3000, function(){
  console.log("Server it's working!");
});