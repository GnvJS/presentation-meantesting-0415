'use strict';

var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var tools = require('./routes/tools');

var app = module.exports = express();

//app.engine('.html', ejs.__express);

//app.set('views', __dirname + '/views');
//app.set('view engine', 'html');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/api', tools);

app.use('/libs', express.static(path.resolve('bower_components')));
app.use('/public', express.static(path.resolve('client/app')));
app.use('/views', express.static(path.resolve('client/views')));

app.get('/*', function(reqeust, response) {
  response.sendFile(path.join(__dirname, '../client/views', 'index.html'));
});

if (!module.parent) {
  app.listen(3520);
}
