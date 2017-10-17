import request from 'superagent'

var widgetUrl = 'http://localhost:3000/widgets'
var usersUrl = 'http://localhost:3000/users'
var beersUrl = 'http://localhost:3000/beers'


export function getWidgets (callback) {
  request
    .get(widgetUrl)
    .end((err, res) => {
      if (err) {
        callback(err)
      } else {
        // console.log('This is getWidgets res.body', res.body)
        callback(null, res.body)
      }
    })
}

export function getUsers(callback) {
  request
    .get(widgetUrl)
    .end((err, res) => {
      if (err) {
        callback(err)
      } else {
        // console.log('This is getUsers res.body', res.body)
        callback(null, res.body)
      }
    })
}

export function getBeers(callback) {
  request
    .get(beersUrl)
    .end((err, res) => {
      if (err) {
        callback(err)
      } else {
        // console.log('This is getBeers res.body', res.body)
        callback(null, res.body)
      }
    })
}

export function appendWidget (widget, callback) {
  // 3. appendWidget is called by addWidget in AddWidget Component.
  request
    .post(widgetUrl)
    // ie post this data, and send it this widget.
    .send(widget)
    // 3. passes widget to server url (or router.post) as req.body
    .end((err, res) => {
      // 7. does response from router.post come back as a 500 (ie error), or 201 (all ok something created)
      if (err) {
        callback(err)
      } else {
        callback()
        // 
      }
    })
}
