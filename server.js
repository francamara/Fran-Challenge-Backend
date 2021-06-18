const dotenv = require('dotenv').config()
const { sequelize } = require('./models')
const database = require('./models')
const app = require('./index')

const PORT = process.env.PORT || 5000

async function connection() {
  try {
    await sequelize.authenticate()
    console.log('Connection to DATABASE established successfully.')
    app.listen(PORT, () => {
      console.log(`SERVER STARTED ON ${PORT}`)
    })
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
}

connection()
