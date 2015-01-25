var http = require('http');
var url = require('url');

var server = http.createServer(function(request, response){
  response.writeHead(200, {'Content-Type': 'text/html'});
  response.write('<h1>Data of string query</h1>');
  var result = url.parse(request.url, true);
  for(var key in result){
    if(key == 'protocol'){
        response.write('<h2>IM PROTOCOL</h2>');
    }
    response.write('<ul>'+key+': '+result.query[key]+'</ul>');
  }
  response.end();
});

server.listen(3000, function(){
  console.log("Server it's working!");
});