'use strict'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'tasks',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        value: {
          type: Sequelize.STRING,
        },
        isComplete: {
          type: Sequelize.BOOLEAN,
          defaultValue: false,
        },
      },
      { freezeTableName: true }
    )
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('tasks')
  },
}
