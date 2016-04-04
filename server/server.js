var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');

var port = 3000;

app.use(express.static(__dirname + '/../app'));
app.use(bodyParser());

app.use(function(request, response, next) {
  response.header("Access-Control-Allow-Origin", "*");
  response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/chartscripts', function(request, response) {
  var chartScriptPath = 'chartScripts/' + request.headers.chartfile;
  fs.readFile(chartScriptPath, function(error, data) {
    if(error) {
      console.log('There was an error reading the file', error);
      response.send(404);
    } else {
      response.send(data);
    }
  });
});

app.listen(port);
console.log('Server listening on port', port)