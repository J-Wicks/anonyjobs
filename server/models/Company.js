const db = require('../db');
const Sequelize = require('sequelize');
const crypto = require('crypto')
const _ = require('lodash');

var Company = db.define('company', {
	HRemail: {
		type: Sequelize.STRING,
		allowNull: false,
		unique: true,
		validate: {
			isEmail: true
		}
	},
	password: {
		type: Sequelize.STRING
	},
	companyName: {
		type: Sequelize.STRING
	},
	industry: {
		type: Sequelize.STRING
	},
	hrFirstName: {
		type: Sequelize.STRING
	},
	hrLastName: {
		type: Sequelize.STRING
	}
})



module.exports = Company;