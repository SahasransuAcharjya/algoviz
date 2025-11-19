// algoviz-backend/routes/lessonRoutes.js
const express = require('express');
const {
  getLessons,
  getLesson,
  createLesson,
  updateLesson,
  deleteLesson
} = require('../controllers/lessonController');

const router = express.Router();

router.get('/', getLessons);
router.get('/:id', getLesson);
router.post('/', createLesson);
router.put('/:id', updateLesson);
router.delete('/:id', deleteLesson);

module.exports = router;
