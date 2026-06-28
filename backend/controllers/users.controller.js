const db = require('../config/db');

const getAllUsers = async (req, res) => {
  try {
    // Explicitly exclude password field
    const [rows] = await db.query(
      'SELECT id, name, email, role, created_at FROM users ORDER BY id ASC'
    );

    res.json({ users: rows });
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch users', error: err.message });
  }
};

module.exports = { getAllUsers };

