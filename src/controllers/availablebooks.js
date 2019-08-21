const {
  getAvailableBooks,
} = require('../model/quires/getdata');


exports.availablebooks = (req, res) => {
  getAvailableBooks()
    .then((result) => res.render('availablebooks', {
      book: result.rows,
    }));
};
