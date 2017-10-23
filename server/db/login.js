const {generate} = require('../auth/hash')
// const connection = require('../index.js')
const {knex} = require('../dbFunctions')

function userExists (username) {
  return knex('login')
    .where('login.username', username)
    .first()
    // .where username matches will return an array
    .then(user => {
      return !!user
    })
    // where this returns an array with any values in it, will return bool
}

function createUser (username, password) {
  // connection gives access to db function.
  console.log(generate)
  console.log(typeof generate)
  const passwordHash = generate(password)
  return knex('login')
  // curlies as we've created an object.
  // hash:password means put the password into the hash field.
    .insert({username, hash: passwordHash})
}

module.exports = {
  userExists: userExists,
  createUser: createUser
}
