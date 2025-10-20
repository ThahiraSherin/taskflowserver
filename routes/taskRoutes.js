const express = require('express');
const router = express.Router();
const {
  getTasks,
  createTask,
  toggleTask,
  deleteTask,
} = require('../controllers/taskController');

router.get('/', getTasks);
router.post('/', createTask);
router.put('/:id', toggleTask);
router.delete('/:id', deleteTask);

module.exports = router;