const express = require('express');

const {
  getTasksController,
  postTasksController,
} = require('./tasks.controller');

const router = express.Router();

router.get('/', getTasksController);
router.post('/', postTasksController);

module.exports = {
  tasksRouter: router,
};
