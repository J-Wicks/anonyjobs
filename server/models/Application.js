const db = require('../db');
const Sequelize = require('sequelize');

const Application = db.define('application', {
	coverLetter: {
		type: Sequelize.TEXT,
		allowNull: false
	}
})


module.exports = Application;
