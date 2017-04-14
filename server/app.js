const express = require('express');
const bodyParser = require('body-parser');
var OAuth = require('oauth');
require('dotenv').config();
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

var index = require('./routes/index');

// app.use('/', (req, res, next) => {
//   res.send('hello');
// })

app.use('/', index);

app.listen(3000);

module.exports = app;
