const express = require('express');
const authMiddleware = require('../middleware/auth.middleware');
const db = require('../config/db');

const router = express.Router();

router.get('/stats', authMiddleware, async (req, res) => {
  return res.json({
    totalStudents: 1247,
    totalTeachers: 84,
    totalClasses: 36,
    totalSubjects: 52,
    feesCollected: 284500,
    activeExams: 6,
    reportsGenerated: 318,
    attendanceRate: 91.4,
  });
});

module.exports = router;

