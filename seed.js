const Promise = require('bluebird');
const db = require('./server/models').db;
const createUser = require('./seedUtils').createUser;
const collectSkillsForDb = require('./seedUtils').collectSkillsForDb;
const companies = require('./seedUtils/genericCompanies').company
const createPosting = require('./seedUtils/genericPosting').createPosting;
const jobFields = require('./seedUtils/genericPosting').jobFields;
const Company = require('./server/models/Company');
const Posting = require('./server/models/Posting');

const amountOfUsers = 200;

function getCollectionOfUsers(n) {
  let users = [];
  while (n) {
    let newUser = createUser()
    users.push(newUser)
    n -=1
  }
  return users;
}

let newUsers = getCollectionOfUsers(amountOfUsers);
let sampleSkills = collectSkillsForDb();

let data = {
  Users: newUsers,
  skill: sampleSkills,
  company: companies
};

function createData() {

  db.sync({ force: true })
  .then(function () {
    console.log("Dropped old data, now inserting new data.");
    return Promise.map(Object.keys(data), function (name) {
      return Promise.map(data[name], function (item) {
        return db.model(name)
        .create(item);
      })
    });
  })
  .then(function(){
    console.log('New users and skills added to the database.')
    return Company.findAll()
  })
  .then(function(allCompanies){
    let companiesArr = allCompanies
    let companiesPostingsPromises = []
    allCompanies.forEach(function(company){
      let sector = company.industry;
      let newPostings = [];
      let counter = 1;
      while (counter) {
        let newPosting = createPosting(sector);
        let newPostingPromise = (
          Posting.create(newPosting)
          .then(function(createdPosting){
            company.addPosting(createdPosting)
          })
          .catch(console.error)
        )
        counter -= 1
        companiesPostingsPromises.push(newPostingPromise);
      }
    });
    return Promise.all(companiesPostingsPromises)
  })
  .then(function(){
    console.log('Companies and job postings added to the database.')
  })
  .finally(function() {
    db.close()
    console.log('Connection closed.');
    return null;
  })
}

createData()
