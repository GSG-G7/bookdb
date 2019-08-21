const dbConnection = require('../config/db_connection');

const postAuther = (authorName) => {
  const sql = {
    text: 'INSERT INTO author (author_name) VALUES ($1) returning *',
    values: [
      authorName,
    ],
  };
  return dbConnection.query(sql);
};
const postBook = (bookInfo, authId) => {
  const sql = {
    text: 'INSERT INTO book (book_name,author_id,release_date,category,book_description) VALUES($1,$2,$3,$4,$5) returning *',
    values: [
      bookInfo.bookname,
      authId,
      bookInfo.releasedate,
      bookInfo.category,
      bookInfo.book_description,
    ],
  };

  return dbConnection.query(sql);
};
module.exports = {
  postAuther,
  postBook,
};
