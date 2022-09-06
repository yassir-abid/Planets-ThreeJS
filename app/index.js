const express = require('express');
const router = require('./router');

const app = express();

app.set('views', './app/views');
app.set('view engine', 'pug');

app.use(express.static('public'));

app.use(router);

module.exports = app;