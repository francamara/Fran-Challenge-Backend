const express = require('express')

const taskRoute = require('./routes/taskRoute')

const app = express()

app.use('/api/v1/tasks', taskRoute)

module.exports = app
