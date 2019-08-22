const {
  getReservedBooks,
} = require('../model/quires/getdata');


exports.reservedbooks = (req, res) => {
  getReservedBooks().then((result) => res.render('reservedbooks', {
    book: result.rows,
  }));
};
