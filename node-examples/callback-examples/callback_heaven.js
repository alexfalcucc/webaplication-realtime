var fs = require('fs');
var readDirectory = function() {

  /*
    Asynchronous readdir(3). Reads the contents of a directory.
    The callback gets two arguments (err, files) where files is
    an array of the names of the files in the directory excluding '.' and '..'.
  */

  fs.readdir(__dirname, function(error, directory) {
    if (error) { throw error; }
    directory.forEach(function(file) {
      read_(file);
    });
  });
};

var read_ = function(file) {
  var path = './' + file;

  /*
    Objects returned from fs.stat(), fs.lstat() and fs.fstat()
    and their synchronous counterparts are of this type.
    See more examples: http://nodejs.org/api/fs.html#fs_class_fs_stats
  */

  fs.stat(path, function(error, stat) {
    if (error) { throw error; }
    if (stat.isFile()) {
      console.log('%s %d bytes', file, stat.size);
    }
  });
};

readDirectory();