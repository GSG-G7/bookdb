const tape = require('tape');
const supertest = require('supertest');

const app = require('../src/app');

tape("testing the home route '/'", (t) => {
  supertest(app)
    .get('/')
    .expect(200)
    .expect('Content-Type', /html/)
    .end((err, res) => {
      t.error(err);
      console.log(res);
      t.end();
    });
});
