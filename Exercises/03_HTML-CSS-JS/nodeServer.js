var http = require('http');
var fs = require('fs');
var path = require('path');
var express = require('express');

var app = express();
app.use(express.static('public'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(200, function () {
  console.log('Example app listening on port 200');
});
