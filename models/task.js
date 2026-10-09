const mongoose = require('mongoose');


const taskSchema = new mongoose.Schema({
    taskName: String,
    taskDeadline: Date,
    taskDescription: String,
    taskCompleted: Boolean
})


const Task = mongoose.model('Task', taskSchema);
module.exports = Task