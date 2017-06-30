const db = require('../db');
const Sequelize = require('sequelize');

const Skills = db.define('skills', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  category: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = Skills
