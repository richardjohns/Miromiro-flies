import request from 'superagent'

var usersUrl = 'http://localhost:3000/v1/users'
var beersUrl = 'http://localhost:3000/v1/beers'

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

// export function getUsers2() {
//   return request.get(usersUrl)
//     .then(data => {
//       const users = data.body
//       return users.map(user => {
//         return Object.assign(
//           {},
//           user,
//           { paragraphs: JSON.parse(user.paragraphs) }
//         )
//       })
//     })
//     .catch(err => {
//       throw Error('You need to implement a post route!')
//     })
// }

// export function appendWidget (widget, callback) {
//   // 3. appendWidget is called by addWidget in AddWidget Component.
//   request
//     .post(widgetUrl)
//     // ie post this data, and send it this widget.
//     .send(widget)
//     // 3. passes widget to server url (or router.post) as req.body
//     .end((err, res) => {
//       // 7. does response from router.post come back as a 500 (ie error), or 201 (all ok something created)
//       if (err) {
//         callback(err)
//       } else {
//         callback()
//         // 
//       }
//     })
// }
