var express = require('exprress')
  , routes = require('./routes/index')
  , users = require('./routes/users')
  , app = exprress()
;

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.listen(3000, function() {
    console.log("Ntalk it's working!");
});

