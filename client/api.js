import request from 'superagent'

var usersUrl = 'http://localhost:3000/v1/users'
var beersUrl = 'http://localhost:3000/v1/beers'
var loginUrl = 'http://localhost:3000/v1/auth'

// only concerned with data
// getUsers(Callback) don't use as using promises.
export function getUsers() {
  return request
    .get(usersUrl)
    .then(res => res.body)
    // below is callback method, above is promises.
    // .end((err, res) => {
    //   if (err) {
    //     callback(err)
    //   } else {
    //     console.log('This is getUsers res.body', res.body)
    //     callback(null, res.body)
    //   }
    // })
}

export function getBeers() {
  return request
    .get(beersUrl)
    .then(res => res.body)
    // .end((err, res) => {
    //   if (err) {
    //     callback(err)
    //   } else {
    //     console.log('This is getBeers res.body', res.body)
    //     callback(null, res.body)
    //   }
    // })
}
