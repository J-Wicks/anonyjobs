const db = require('../db');
const Sequelize = require('sequelize');

const Posting = db.define('posting', {
	positionTitle: {
		type: Sequelize.STRING,
		allowNull: false,
		unique: true
	},
	positionDescription: {
		type: Sequelize.TEXT,
		allowNull: false,
	},
	educationLevel: {
		type: Sequelize.STRING
	},
	educationField: {
		type: Sequelize.STRING
	},
	experienceLevel: {
		type: Sequelize.INTEGER,
		min: 1,
		max: 99
	},
	experienceField: {
		type: Sequelize.STRING
	}

})


module.exports = Posting;