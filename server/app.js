const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');

var index = require('./routes/index');
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api', index);
app.listen(3000);

module.exports = app;
