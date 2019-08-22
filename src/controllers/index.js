const express = require('express');

const { home } = require('./home');
const { addbookpage } = require('./addbookpage');
const { allbooks } = require('./allbooks');
const { availablebooks } = require('./availablebooks');
const { reservedbooks } = require('./reservedbooks');
const {
  clientError,
  serverError,
} = require('./errors');
const { addbook } = require('./addbook');

const router = express.Router();

router.get('/', home);
router.get('/add-books', addbookpage);
router.get('/allbooks', allbooks);
router.get('/available-books', availablebooks);
router.get('/reserved-books', reservedbooks);
router.post('/add-books', addbook);


router.use(clientError);
router.use(serverError);

module.exports = router;
