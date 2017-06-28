const db = require('../db');
const Sequelize = require('sequelize');
const crypto = require('crypto')
const _ = require('lodash');

var Users = db.define('Users', {
	email: {
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

	salt: {
		type: Sequelize.STRING
	}
})



module.exports = Users;