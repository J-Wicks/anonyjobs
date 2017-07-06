const Promise = require('bluebird');
const db = require('./server/models').db;
// const User = require('./server/models/User');
// const Skill = require('./server/models/Skill');
const createUser = require('./utils/seedUtils').createUser;
const collectSkillsForDb = require('./utils/seedUtils').collectSkillsForDb;
const companies = require('./utils/genericCompanies').company
const createPosting = require('./utils/genericPosting').createPosting;
const jobFields = require('./utils/genericPosting').jobFields;

const Company = require('./server/models/Company');
const Posting = require('./server/models/Posting');

console.log('company', db.model('company'))


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
  // postings
  // skills: []
  // company: companies
};


function createData() {

  db.sync({ force: true })
  .then(function () {
    console.log("Dropped old data, now inserting data");
    return Promise.map(Object.keys(data), function (name) {
      return Promise.map(data[name], function (item) {
        return db.model(name)
        .create(item);
      })
    });
  })
  .then(function(){
    console.log('New users and skills added to the database!')
    return Company.findAll()
  })
  .then(function(allCompanies){
    let companiesArr = allCompanies
    let companiesPostingsPromises = []
    // let companiesPostings = allCompanies.map(function(company){
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
  // .then(function() {
  //    User.findAll()
  //    .then(function(foundUsers){
  //      let educationUsersArray = []
  //      foundUsers.forEach(function(user){
  //        let educationCredentials = []
  //        let promiseEducationCredentials = educationCredentials.map(function(credential) {
  //          let promiseUser = user.addEducation(credential);
  //          return promiseUser;
  //
  //        })
  //        return Promise.all(promiseEducationCredentials);
  //        user.addEducation
  //      }
  //    })
  //
  // })
  .finally(function() {
    db.close()
    console.log('connection closed');
    return null;
  })

}

createData()
