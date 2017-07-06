const db = require('../db');
const Sequelize = require('sequelize');

const Posting = db.define('posting', {
	positionTitle: {
		type: Sequelize.STRING,
		allowNull: false
		// unique: true
	},
	positionDescription: {
		type: Sequelize.TEXT,
		allowNull: false,
	},
	educationLevel: {
		type: Sequelize.ENUM('Some High School', 'High School Diploma or Equivalent', 'Some College', 'B.A.', 'B.S.', 'M.S.', 'MBA', 'PhD')
	},
	educationField: {
		type: Sequelize.ENUM('Computer Science', 'Computer Engineering', 'Education', 'Physics', 'Media Studies', 'Accounting', 'Finance', 'Business', 'Communication', 'Journalism', 'Human Resources')
	},
	experienceLevel: {
		type: Sequelize.INTEGER,
		min: 1,
		max: 99
	},
	experienceField: {
		type: Sequelize.ENUM('Computer Science', 'Education', 'Technology', 'Writing/Editing', 'Marketing', 'Journalism', 'Accounting', 'Finance', 'Consulting', 'Product Management', 'Project Management', 'Budgeting', 'Senior Management', 'Business Advisory', 'Human Resources')
	}

})


module.exports = Posting
