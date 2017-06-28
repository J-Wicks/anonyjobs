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

	googleId: Sequelize.STRING,

	salt: {
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
	},
	hooks: {
		beforeCreate: setSaltAndPassword,
		beforeUpdate: setSaltAndPassword
	}
})

function setSaltAndPassword (company) {
	if (company.changed('password')) {
    company.salt = company.Model.generateSalt();
    company.password = company.Model.encryptPassword(company.password, company.salt);
  }
}



module.exports = Company;