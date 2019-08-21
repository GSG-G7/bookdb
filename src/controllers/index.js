const express = require('express');

const { home } = require('./home');
const { addbooks } = require('./addbooks');
const { allbooks } = require('./allbooks');
const { availablebooks } = require('./availablebooks');
const { reservedbooks } = require('./reservedbooks');
const { clientError, serverError } = require('./errors');

const router = express.Router();

router.get('/', home);
router.get('/add-books', addbooks);
router.get('/allbooks', allbooks);
router.get('/available-books', availablebooks);
router.get('/reserved-books', reservedbooks);


router.use(clientError);
router.use(serverError);

module.exports = router;
