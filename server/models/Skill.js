const db = require('../db');
const Sequelize = require('sequelize');

const Skill = db.define('skill', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  category: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = Skill
