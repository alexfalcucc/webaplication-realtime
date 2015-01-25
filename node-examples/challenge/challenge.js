var http = require('http');
var url = require('url');
var fs = require('fs');


var directory = function(filename){
  return __dirname + '/' + filename
}

var router = function(pathname){
  if(pathname && pathname != '/'){
    var file = directory(pathname + '.html');
    var exists = fs.existsSync(file);
    if (exists){ return file; }
    return directory('notfound.html');
  }
  return directory('articles.html');
}

var server = http.createServer(function(request, response){
   var pathname = url.parse(request.url, true).pathname;
   var page = router(pathname);
   
   fs.readFile(page, function(error, html){
     response.writeHeader(200, {'Content-Type': 'text/html'});
     response.end(html);
   }); 
});

server.listen(3000, function(){
  console.log('Server its working!');
});