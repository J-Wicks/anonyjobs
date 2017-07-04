const db = require('../db');
const Sequelize = require('sequelize');

const Education = db.define('education', {
  schoolName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  yearGraduated: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  degreeName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  degree: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  finalGPA: {
    type: Sequelize.FLOAT,
    allowNull: true
  }
})

module.exports = Education
