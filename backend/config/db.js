const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});

connection.connect((err) => {
  if (err) {
    // eslint-disable-next-line no-console
    console.error('MySQL connection error:', err.message);
  } else {
    // eslint-disable-next-line no-console
    console.log('MySQL connected');
  }
  // eslint-disable-next-line no-console
  console.log('MySQL DB_NAME:', process.env.DB_NAME);
});

connection.on('error', (err) => {
  // eslint-disable-next-line no-console
  console.error('MySQL connection runtime error:', err.message);
});

module.exports = connection;

// Provide a convenient promise wrapper for async/await usage
module.exports.promise = () => ({
  query: (...args) =>
    new Promise((resolve, reject) => {
      connection.query(...args, (err, results) => {
        if (err) return reject(err);
        resolve(results);
      });
    })
});

