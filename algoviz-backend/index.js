// algoviz-backend/index.js

require('dotenv').config();
const express = require('express');
const cors = require('cors');

const connectDB = require('./config/db');
const authMiddleware = require('./middleware/authMiddleware');
const errorMiddleware = require('./middleware/errorMiddleware');

const lessonRoutes = require('./routes/lessonRoutes');
const quizRoutes = require('./routes/quizRoutes');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
connectDB();

// Public routes
app.use('/api/auth', authRoutes);

// Protected routes requiring auth middleware
app.use('/api/lessons', authMiddleware, lessonRoutes);
app.use('/api/quizzes', authMiddleware, quizRoutes);
app.use('/api/users', authMiddleware, userRoutes);

// Test route
app.get('/', (req, res) => {
  res.send('AlgoViz Backend API is running');
});

// Centralized error handling middleware
app.use(errorMiddleware);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
