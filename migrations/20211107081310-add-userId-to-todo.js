'use strict'
module.exports = {
  up: (queryInterface, Sequelize) => {
    // Add altering commands here
    return queryInterface.addColumn('Todos', 'UserId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id'
      }
    })
  },
  down: (queryInterface, Sequelize) => {
    // Add reverting commands here
    return queryInterface.removeColumn('Todos', 'UserId')
  }
}
