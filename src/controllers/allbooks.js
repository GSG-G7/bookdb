const {
  getAllBooks,
} = require('../model/quires/getdata');


exports.allbooks = (req, res) => {
  getAllBooks()
    .then((result) => res.render('allbooks', {
      book: result.rows,
    }));
};
