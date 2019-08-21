const express = require('express');
const dbConnection = require('../src/model/db_connection');
const router = require('./controllers');

const app = express();

const port = process.env.PORT || 5000;

app.set('port', port);

// app.get('/', (req, res) => {
//   dbConnection
//     .query('select * from book')
//     .then((result) => res.send(result.rows));
// });

app.use(router);

module.exports = app;
