const Sequelize = require('sequelize');
const db = require('../index');

module.exports = db.define('student', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: true,
    validate: {
      isEmail: true
    }
  },
  bio: {
    type: Sequelize.STRING,
    allowNull: false
  }
})
