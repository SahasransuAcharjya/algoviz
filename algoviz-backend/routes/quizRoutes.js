// algoviz-backend/routes/quizRoutes.js
const express = require('express');
const {
  getQuizzes,
  getQuiz,
  createQuiz,
  updateQuiz,
  deleteQuiz
} = require('../controllers/quizController');

const router = express.Router();

router.get('/', getQuizzes);
router.get('/:id', getQuiz);
router.post('/', createQuiz);
router.put('/:id', updateQuiz);
router.delete('/:id', deleteQuiz);

module.exports = router;
