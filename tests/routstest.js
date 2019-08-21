const tape = require('tape');
const supertest = require('supertest');

const app = require('../src/app');

tape('testing the home route', (t) => {
  supertest(app)
    .get('/')
    .expect(200)
    .expect('Content-Type', /html/)
    .end((err, res) => {
      if (err) {
        t.error(err);
      } else {
        t.ok(res.text.includes('<button', 'the html file has buttons'));
        t.end();
      }
    });
});
