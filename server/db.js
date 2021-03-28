const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  port: 3306,
});

db.connect((err) => {
  if (err) { throw err; }
});

module.exports = db;
