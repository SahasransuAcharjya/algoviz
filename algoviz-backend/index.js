// algoviz-backend/index.js

require('dotenv').config();
const express = require('express');
const cors = require('cors');

const connectDB = require('./config/db'); // Import DB connection function

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
connectDB();

// Basic test route
app.get('/', (req, res) => {
  res.send('AlgoViz Backend API is running');
});

// Example: import and use modular routes as you build out your API
// const lessonRoutes = require('./routes/lessonRoutes');
// app.use('/api/lessons', lessonRoutes);

// Server Start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
