var express = require('express');
var path = require('path');
var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use('/', (req, res, next) => {
  return res.render('home');
});

module.exports = app;