const express = require('express');
const authMiddleware = require('../middleware/auth.middleware');
const db = require('../config/db');

const router = express.Router();

router.get('/today', authMiddleware, async (req, res) => {
  return res.json([
    { class: 'Form 1A', subject: 'Mathematics', percentage: 96 },
    { class: 'Form 2B', subject: 'English', percentage: 88 },
    { class: 'Form 3A', subject: 'Physics', percentage: 74 },
    { class: 'Form 3B', subject: 'Chemistry', percentage: 71 },
    { class: 'Form 4C', subject: 'Biology', percentage: 62 },
    { class: 'Form 2A', subject: 'History', percentage: 93 },
  ]);
});

module.exports = router;

