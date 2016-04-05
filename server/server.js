var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');
var multer = require('multer');
var upload = multer({ dest: './data'});
var Promise = require('bluebird');
var dataOption = require('./db/config.js').dataOption;

var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/../app'));
app.use(bodyParser());

app.use(function(request, response, next) {
  response.header("Access-Control-Allow-Origin", "*");
  response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Serves scripts for d3 visualizations
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

// Accepts customer dataset uploads from users
app.post('/newchartdata', upload.single('json'), function(request, response) {
  if(request.file){
    var fileTitle = request.file.originalname;
    var filePath = 'data/' + request.file.filename;
    var dataOptionsObject = {
      name: fileTitle,
      file: filePath
    }
    var newDataOption = new dataOption(dataOptionsObject).save(function(error, option) {
      if (error) {
        console.log('Could save new dataset', error);
        response.redirect('/');
      } else {
        response.redirect('/');
      }
    })
  } else {
    response.redirect('/');
  }
});

// Serves dataset options to client
app.get('/dataoptions', function(request, response) {
  dataOption.find(function(error, options) {
    if(error) {
      console.log('Error retrieving data options form database', error);
      response.send(404);
    } else {
      response.send(JSON.stringify(options));
    }
  });
});

// Serves visualization options to client
app.get('/chartoptions', function(request, response) {
  var chartOptionsPath = __dirname + '/data/chartoptions.json';
  fs.readFile(chartOptionsPath, function(error, data) {
    if (error) {
      console.log('There was an error reading chart options', error);
      response.send(404);
    } else {
      response.send(data);
    }
  })
});

// Serves chart data to client
app.get('/data/*', function(request, response) {
  var jsonFilePath = request.url.slice(1);
  fs.readFile(jsonFilePath, function(error, data) {
    if(error) {
      console.log('There was an error reading the json data file', error)
    } else {
      response.send(data);
    }
  })
})

app.listen(port);
console.log('Server listening on port', port)