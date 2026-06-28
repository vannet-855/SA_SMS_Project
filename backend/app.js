const express = require('express');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/auth.routes');
const userRoutes = require('./routes/user.routes');

const app = express();

app.use(
  cors({
    origin: 'http://localhost:4200',
    credentials: true
  })
);
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

module.exports = app;

