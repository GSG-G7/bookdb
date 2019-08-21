const dbConnection = require('../config/db_connection');

const getAllBooks = () => dbConnection.query('select * from book join author ON author.id = book.author_id');

const getAvailableBooks = () => dbConnection.query('select * from book join author ON author.id = book.author_id where is_available');
const getReservedBooks = () => dbConnection.query('select * from book where !is_available');

module.exports = {
  getAllBooks,
  getAvailableBooks,
  getReservedBooks,
};
