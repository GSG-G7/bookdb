const app = require('./app');

const port = app.get('port');

app.listen(port, () => {
  console.log(`serrver is up to http://localhost:${port}`);
});
