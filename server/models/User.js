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
	},
	firstName: {
		type: Sequelize.STRING
	},
	lastName: {
		type: Sequelize.STRING
	},
	headline: {
		type: Sequelize.STRING
	},
	industry: {
		type: Sequelize.STRING
	},
	location: {
		type: Sequelize.STRING
	},
	summary:{
		type: Sequelize.TEXT
	}
},{
	instanceMethods: {
		sanitize: function () {
      return _.omit(this.toJSON(), ['password', 'salt']);
    },

    correctPassword: function (candidatePassword) {
      return this.Model.encryptPassword(candidatePassword, this.salt) === this.password;
    }
	},
	classMethods: {
		generateSalt: function () {
      return crypto.randomBytes(16).toString('base64');
    },
    encryptPassword: function (plainText, salt) {
      const hash = crypto.createHash('sha1');
      hash.update(plainText);
      hash.update(salt);
      return hash.digest('hex');
    }

	}
	
})





module.exports = Users;
