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
		type: Sequelize.ENUM('Some High School', 'High School Diploma or Equivalent', 'Some College', 'B.A.', 'B.S.', 'M.S.')
	},
	educationField: {
		type: Sequelize.ENUM('Computer Science', 'Education', 'Physics', 'Media Studies')
	},
	experienceLevel: {
		type: Sequelize.INTEGER,
		min: 1,
		max: 99
	},
	experienceField: {
		type: Sequelize.ENUM('Computer Science', 'Education', 'Surfing')
	}

})


module.exports = Posting;