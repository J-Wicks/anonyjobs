const Sequelize = require('sequelize');

const User = require('./User');
const Application = require('./Application')
const Posting = require('./Posting')
const Company = require('./Company')


//Associate application with user. User has zero to many applications.
Application.belongsTo(User);
User.hasMany(Application);

//Associate posting with company. Company has zero to many postings.
Posting.belongsTo(Company);
Company.hasMany(Posting);

//Associate application with posting. Posting has zero to many applications.
Application.belongsTo(Posting);
Posting.hasMany(Application);


module.exports = {User, Application, Posting, Company};
