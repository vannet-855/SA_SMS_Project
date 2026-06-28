const express = require('express');
const authMiddleware = require('../middleware/auth.middleware');
const db = require('../config/db');

const router = express.Router();

router.get('/upcoming', authMiddleware, async (req, res) => {
  return res.json([
    { name: 'Midterm — Maths', class: 'Form 3A', date: 'Jun 20', status: 'Active' },
    { name: 'Quiz — English', class: 'Form 1B', date: 'Jun 21', status: 'Active' },
    { name: 'Final — Physics', class: 'Form 4A', date: 'Jun 25', status: 'Pending' },
    { name: 'Monthly — Biology', class: 'Form 2C', date: 'Jun 28', status: 'Pending' },
    { name: 'Final — History', class: 'Form 4B', date: 'Jul 2', status: 'Draft' },
  ]);
});

module.exports = router;

