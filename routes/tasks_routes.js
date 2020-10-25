const express = require('express');
let taskController = require('../controllers/task');

let router = express.Router();

router.route('/tasks').get(taskController.index).post(taskController.create);

router.get('/tasks/new', taskController.new);

router.get('/tasks/:id/edit', taskController.edit);

router.route('/tasks/:id').get(taskController.show).put(taskController.update);

module.exports = router;