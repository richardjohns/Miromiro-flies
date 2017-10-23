const connection = require('../index.js')
const {knex} = require('../dbFunctions')

function userExists (username, connection) {
  return knex('login')
    .where('username', username)
    // .where username matches will return an array
    .then(user => {
      return user.length[0] > 0
    })
    // where this returns an array with any values in it, will return bool
}

function createUser (username, password, connection) {
  // connection gives access to db function.
  return knex('login')
    // curlies as we've created an object.
    // hash:password means put the password into the hash field.
    .insert({username, hash: password})
}

module.exports = {
  userExists: userExists,
  createUser: createUser
}
