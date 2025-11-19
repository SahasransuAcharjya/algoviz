// algoviz-backend/models/Quiz.js
const mongoose = require('mongoose');

const QuizSchema = new mongoose.Schema({
  lesson: { type: mongoose.Schema.Types.ObjectId, ref: 'Lesson', required: true },
  questions: [
    {
      questionText: String,
      options: [String],
      correctAnswerIndex: Number,
      explanation: String,
    }
  ],
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Quiz', QuizSchema);
