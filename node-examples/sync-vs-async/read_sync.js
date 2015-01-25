var fs = require('fs');
var readSync = function(file){
  console.log('Reading file SYNC MODULE...');
  var start = new Date().getTime();
  fs.readFileSync(file);
  var end = new Date().getTime();
  console.log('Time block sync: '+ (end - start) +'ms');
};
module.exports = readSync;