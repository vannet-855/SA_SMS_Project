const db = require('../config/db');

const findUserByEmailAndRole = async (email, role) => {
  const [rows] = await db.query(
    'SELECT * FROM users WHERE email=? AND role=?',
    [email, role]
  );
  return rows[0];
};

module.exports = { findUserByEmailAndRole };
