var http = require('http');
var fs = require('fs');
var readSync = require('./read_sync');
var readAsync = require('./read_async');
var file = 'node.exe';
var stream = fs.createWriteStream(file);
var download = 'http://nodejs.org/dist/latest/node.exe';


http.get(download, function(response){
  console.log("Making downlaod...");
  response.on('data', function(data){
    stream.write(data);
  });
  response.on('end', function(){
    stream.end();
    console.log('Download done!');
    readAsync(file);
    readSync(file);
  });
});