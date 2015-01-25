var fs = require('fs');

for(var i = 1; i <= 5; i++){
  var file = 'async-txt' + i + '.txt';
  fs.writeFile(file, 'Hellow World from async method!', function(err, out){
    if(err) throw err;
    console.log(out);
  });
}