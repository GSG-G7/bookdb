const {
  reservedbooks,
} = require('../model/quires/getdata');


exports.reservedbooks = (req, res) => {
  reservedbooks().then((result) => res.render('reservedbooks', {
    book: result.rows,
  }));
};
