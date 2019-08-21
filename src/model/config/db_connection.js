const {
  Pool,
} = require('pg');

require('env2')('./config.env');

// const dbUrl = process.env.DB_URL;

let dbUrl = '';
if (process.env.NODE_ENV === 'test') {
  dbUrl = process.env.TEST_DB_URL;
} else if (process.env.NODE_ENV === 'development') {
  dbUrl = process.env.DB_URL;
} else {
  dbUrl = '';
}

if (!dbUrl) {
  throw new Error('Enviroment variable DB_URL must be set');
}

const options = {
  connectionString: dbUrl,
  ssl: true,
};

module.exports = new Pool(options);
