var fs = require('fs');
var readDirectory = function() {
  fs.readdir(__dirname, function(error, directory) {
    if (error) { throw error; }
    directory.forEach(function(file) {
      read_(file);
    });
  });
};

var read_ = function(file) {
  var path = './' + file;
  fs.stat(path, function(error, stat) {
    if (error) { throw error; }
    if (stat.isFile()) {
      console.log('%s %d bytes', file, stat.size);
    }
  });
};

readDirectory();