const dbConnection = require('../config/db_connection');

const postData = (body) => {
  const sql = {
    text: 'INSERT INTO book (book_name,author_id,release_date,category) VALUES($1,$2,$3,$4)',
    values: [
      body.book_name,
      body.author_id,
      body.release_date,
      body.category,
    ],
  };

  return dbConnection.query(sql);
};

module.exports = postData;
