const mysql = require('mysql2');

const port = 3306;

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'mvp',
  port,
});

db.connect((err) => {
  if (err) { throw err; }
  console.log(`database connected at ${port}`);
});

module.exports = db;
