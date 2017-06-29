const Promise = require('bluebird');
const db = require('./server/db');
const User = require('./server/models/User');
const createUser = require('./utils/seedUtils').createUser;

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

let newUsers = getCollectionOfUsers(600)

let data = {
  Users: newUsers
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
  .then(() => {
    console.log('New users added to the database')
  })


}

createData()
