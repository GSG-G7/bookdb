const {
  postAuther,
  postBook,
} = require('../model/quires/postdata');

exports.addbook = (req, res, next) => {
  postAuther(req.body.authorname)
    .then((result) => {
      postBook(req.body, result.rows[0].id)
        .then(() => {
          res.redirect('/add-books');
        })
        .catch((err) => next(err));
    })
    .catch((err) => next(err));
};
