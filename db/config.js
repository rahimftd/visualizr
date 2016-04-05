var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/visualizr');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Successfully connected to mongodb');
});
var dataOptionsSchema = mongoose.Schema({
  name: String,
  file: String,
  user: String
});

var chartOptionsSchema = mongoose.Schema({
  title: String,
  file: String
});

exports.DataOption = mongoose.model('DataOption', dataOptionsSchema);
exports.ChartOption = mongoose.model('ChartOption', chartOptionsSchema);