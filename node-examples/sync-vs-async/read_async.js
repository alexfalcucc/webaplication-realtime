var fs = require('fs');
var readAsync = function(file){
  console.log('Reading file ASYNC MODULE...');
  var start = new Date().getTime();
  fs.readFile(file);
  var end = new Date().getTime();
  console.log("Time block async: "+ (end - start) + 'ms');
};
module.exports = readAsync;