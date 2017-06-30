const Promise = require('bluebird');
const db = require('./server/db');
const User = require('./server/models/User');
const Skills = require('./server/models/Skills')
const createUser = require('./utils/seedUtils').createUser;
const collectSkillsForDb = require('./utils/seedUtils').collectSkillsForDb;


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

let newUsers = getCollectionOfUsers(600);
let sampleSkills = collectSkillsForDb();

let data = {
  Users: newUsers,
  skills: sampleSkills
  // skills: []
  // company: companies
};


function createData() {

  db.sync({force: true})
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
