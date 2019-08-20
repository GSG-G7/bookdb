const fs = require('fs');
const {join} = require('path');

const buildDatabase=()=>{
  const connection = require('./db_connection');
  const sql = fs.readFileSync(join(__dirname,'db_build.sql')).toString();

  connection
  .query(sql)
  .then(result=>console.log(result))
  .catch(error=>console.log(error));
};

buildDatabase();


module.exports = buildDatabase;
