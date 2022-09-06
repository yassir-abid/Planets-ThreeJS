const express = require('express');
const path = require('path');
const router = require('./router');

const app = express();

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, '../public')));

app.use(router);

module.exports = app;