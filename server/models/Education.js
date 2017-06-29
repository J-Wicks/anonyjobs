const db = require('../db');
const Sequelize = require('sequelize');

const Education = db.define('education', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  yearGraduated: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  degree: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  GPA: {
    type: Sequelize.FLOAT,
    allowNull: true
  }
})

module.exports = Education
