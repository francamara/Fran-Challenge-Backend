const { Task } = require('../models')

exports.getAllTasks = async (req, res) => {
  const tasksData = await Task.findAll({
    attributes: ['id', 'value', 'isComplete'],
  })
  res.status(200).json({ message: 'All tasks', tasksData })
}

exports.createNewTask = async (req, res) => {
  const taskData = req.body
  const newTask = await Task.create(taskData)
  res.status(200).json({ message: 'New Task created successfully', newTask })
}
