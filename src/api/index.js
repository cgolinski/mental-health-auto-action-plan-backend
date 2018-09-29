const express = require('express');

const { tasksRouter } = require('../routes/tasks/tasks.router');

const router = express.Router();
router.use('/tasks', tasksRouter);

module.exports = router;
