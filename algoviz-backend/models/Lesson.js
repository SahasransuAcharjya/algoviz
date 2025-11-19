// algoviz-backend/models/Lesson.js
const mongoose = require('mongoose');

const LessonSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  content: { type: String }, // Could be HTML or markdown for explanations
  animations: { type: Array, default: [] }, // Animation metadata (e.g., steps, types)
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Lesson', LessonSchema);
