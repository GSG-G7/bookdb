const { Router } = require('express');
const { home } = require('./home');
const { addbooks } = require('./addbooks');
const { availablebooks } = require('./availablebooks');
const { reservedbooks } = require('./reservedbooks');
const { clientError, serverError } = require('./errors');


Router.get('/', home);
Router.get('/add-books', addbooks);
Router.get('/available-books', availablebooks);
Router.get('/reserved-books', reservedbooks);


Router.use(clientError);
Router.use(serverError);

module.exports = Router;
