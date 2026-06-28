const express = require('express');
const authMiddleware = require('../middleware/auth.middleware');
const db = require('../config/db');

const router = express.Router();

router.get('/recent', authMiddleware, async (req, res) => {
  return res.json([
    {
      id: 1,
      name: 'Amara Lopes',
      initials: 'AL',
      color: '#f97316',
      class: 'Form 3A',
      gender: 'Female',
      feeStatus: 'Paid',
      enrolled: 'Jan 2024',
    },
    {
      id: 2,
      name: 'Brian Kofi',
      initials: 'BK',
      color: '#3b82f6',
      class: 'Form 2B',
      gender: 'Male',
      feeStatus: 'Pending',
      enrolled: 'Sep 2023',
    },
    {
      id: 3,
      name: 'Chioma Nwosu',
      initials: 'CN',
      color: '#8b5cf6',
      class: 'Form 1A',
      gender: 'Female',
      feeStatus: 'Overdue',
      enrolled: 'Jan 2025',
    },
    {
      id: 4,
      name: 'David Mensah',
      initials: 'DM',
      color: '#22c55e',
      class: 'Form 4C',
      gender: 'Male',
      feeStatus: 'Paid',
      enrolled: 'Sep 2022',
    },
    {
      id: 5,
      name: 'Emeka Okonkwo',
      initials: 'EO',
      color: '#ef4444',
      class: 'Form 3B',
      gender: 'Male',
      feeStatus: 'Partial',
      enrolled: 'Jan 2024',
    },
  ]);
});

module.exports = router;

