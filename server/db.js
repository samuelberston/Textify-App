const mysql = require('mysql2');

const port = 3306;

const db = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'breathefour',
  database: 'MVP',
  port: 3306,
});

db.connect((err) => {
  if (err) { throw err; }
  console.log(`database connected at ${port}`);
});

module.exports = db;
