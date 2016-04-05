var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');
var multer = require('multer');
var upload = multer({ dest: '../app/data'});
var Promise = require('bluebird');

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

app.post('/newchartdata', upload.single('json'), function(request, response) {
  if(request.file){
    var fileTitle = request.file.originalname;
    var filePath = 'data/' + request.file.filename;
    var dataOptionsObject = {
      name: fileTitle,
      file: filePath
    }
    var dataOptionsPath = __dirname + '/data/dataoptions.json';  
    fs.readFile(dataOptionsPath, function(error, data) {
      if (error) {
        console.log('There was an error reading data options', error);
      } else {
        var dataOptions = JSON.parse(data);
        dataOptions.push(dataOptionsObject);
        dataOptions = JSON.stringify(dataOptions);
        fs.writeFile(dataOptionsPath, dataOptions, function(error) {
          if(error) {
            console.log('There was a problem writing to data options', error);
            response.redirect('/'); 
          } else {
            response.redirect('/');
          }
        })
      }
    });
  } else {
    response.redirect('/');
  }
});

app.get('/dataoptions', function(request, response) {
  var dataOptionsPath = __dirname + '/data/dataoptions.json';
  fs.readFile(dataOptionsPath, function(error, data) {
    if (error) {
      console.log('There was an error reading data options', error);
      response.send(404);
    } else {
      response.send(data);
    }
  })
});

app.listen(port);
console.log('Server listening on port', port)