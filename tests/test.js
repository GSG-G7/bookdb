const tape = require('tape');
const buildDatabase = require('../src/model/config/db_build');
const { getAllBooks, getAvailableBooks, getReservedBooks } = require('../src/model/quires/getdata');
const { postAuther, postBook } = require('../src/model/quires/postdata');

tape('Simple test', (t) => {
  t.equal(1, 1, 'test pass');
  t.end();
});

tape('Test get all books', (t) => {
  const expected = [
    'id',
    'book_name',
    'author_id',
    'release_date',
    'date_of_add',
    'is_available',
    'category',
    'book_description',
    'author_name',
  ];

  buildDatabase()
    .then(() => getAllBooks()
      .then((res) => t.deepEqual(Object.keys(res.rows[0]), expected, 'Book should contain all the columns'))
      .then(() => t.end()))
    .catch((err) => console.log(err));
});

tape('Test get available books', (t) => {
  const expected = true;

  buildDatabase()
    .then(() => getAvailableBooks()
      .then((res) => t.deepEqual(res.rows[0].is_available, expected, 'Book should contain available book'))
      .then(() => t.end()))
    .catch(t.error)
    .catch(t.error);
});
tape('Test get reserved books', (t) => {
  const expected = false;

  buildDatabase()
    .then(() => getReservedBooks()
      .then((res) => t.deepEqual(res.rows[0].is_available, expected, 'Book should contain reserved book'))
      .then(() => t.end()))
    .catch(t.error)
    .catch(t.error);
});

tape('Test post book', (t) => {
  const expected = 'programming';
  const bookInfo = {
    bookname: 'c#',
    releasedate: new Date(),
    category: 'programming',
    book_description: 'Introduction to c#',
  };
  buildDatabase()
    .then(() => postAuther('mossa')
      .then((res) => postBook(bookInfo, res.rows[0].id)
        .then((result) => t.deepEqual(result.rows[0].category, expected, 'Book should contain category programming')))
      .then(() => t.end()))
    .catch();
});

tape.onFinish(() => process.exit(0));
