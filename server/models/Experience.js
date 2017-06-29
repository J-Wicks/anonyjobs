const db = require('../db');
const Sequelize = require('sequelize');

const Experience = db.define('experience', {
  companyName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  role: {
    type: Sequelize.STRING,
    allowNull: false
  },
  startYear: {
    type: Sequelize.STRING,
    allowNull: false
  },
  endYear: {
    type: Sequelize.STRING,
    allowNull: false
  },
  responsibilities: {
    type: Sequelize.TEXT,
    allowNull: true
  }
})

module.exports = Experience
