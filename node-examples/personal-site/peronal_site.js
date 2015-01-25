var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request, response){
  /*
    The constant __dirname return 
    the yourself directory.
  */
  fs.readFile(__dirname + '/index.html', function(error, html){
    response.writeHeader(200, {'Content-Type': 'text/html'});
    response.write(html);
    response.end();
  });
});

server.listen(3000, function(){
  console.log('Runnig Personal Web Site!');
});