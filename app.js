var express = require('express');
var app = express();

app.use('/', express.static(__dirname + '/public'));
app.use(express.bodyParser());

app.get('/', function(req, res){
  var body = 'Hello World';
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Length', body.length);
  res.end(body);
});

app.listen(2020);