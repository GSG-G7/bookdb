const dbConnection = require('../config/db_connection');

const getAllBooks = () => dbConnection.query('select * from book');

const getAvailableBooks = () => dbConnection.query('select * from book where is_available');
const getReservedBooks = () => dbConnection.query('select * from book where !is_available');

module.exports = {
  getAllBooks,
  getAvailableBooks,
  getReservedBooks,
};
