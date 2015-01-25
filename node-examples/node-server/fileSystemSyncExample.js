var fs = require('fs');

fs.readFile('/index.html', function(error, file){
  if (error) throw error;
  console.log(file);
});

var file = fs.readFileSync('/index.html');
console.log(file);