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

	googleId: Sequelize.STRING,

	salt: {
		type: Sequelize.STRING
	},
	firstName: {
		type: Sequelize.STRING
	},
	lastName: {
		type: Sequelize.STRING
	},
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

function setSaltAndPassword (user) {
	if (user.changed('password')) {
    user.salt = user.Model.generateSalt();
    user.password = user.Model.encryptPassword(user.password, user.salt);
  }
}



module.exports = Users;