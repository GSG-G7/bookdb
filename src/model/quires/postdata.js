const dbConnection = require('../config/db_connection');

const postData = (body) => {
  const sql = {
    text: 'INSERT INTO book (book_name,author_id,release_date,category,book_description) VALUES($1,$2,$3,$4,$5)',
    values: [
      body.book_name,
      body.author_id,
      body.release_date,
      body.category,
      body.book_description,
    ],
  };

  return dbConnection.query(sql);
};

module.exports = postData;
