const tasksRouter = require('express').Router();
const Task = require('../models/task');

tasksRouter.get('/', (req, res) => {
    Task.find({}).then((tasks) => {
        res.json(tasks);
    })
})

module.exports = tasksRouter;