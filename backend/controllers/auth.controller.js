const db = require('../config/db');

const login = async (req, res) => {
  const { email, password, role } = req.body;

  try {
    const [results] = await db.promise().query(
      'SELECT * FROM users WHERE email=? AND role=?',
      [email, role]
    );

    if (!results || results.length === 0) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const user = results[0];

    // Plain text password comparison (for now)
    if (user.password !== password) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    return res.json({
      message: 'Login successful',
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role
      }
    });
  } catch (err) {
    return res.status(500).json({ message: 'Login failed', error: err.message });
  }
};

module.exports = { login };
