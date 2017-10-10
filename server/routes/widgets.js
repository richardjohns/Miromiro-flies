var express = require('express')
var router = express.Router()

var db = require('../db')

router.get('/', function (req, res) {
  db.getWidgets()
    .then(widgets => {
      res.json(widgets)
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

router.post('/', function (req, res) {
  db.saveWidget(req.body)
  // 4. consumes the API
    .then(() => res.sendStatus(201))
  // 6. returns positive status as a response to the API.
})

module.exports = router

var myCurry = {
  greetDeeplyCurried: function (greeting) {
    return function (separator) {
      return function (emphasis) {
        return function (name) {
          console.log(greeting + separator + name + emphasis)
        }
      }
    }
  },
  greetAwkwardly: function () {
    this.greetDeeplyCurried('Hello')('...')('?')
  }
}

console.log(myCurry.greetAwkwardly('Heidi', 'Bob'))

myCurry.greetAwkwardly('Heidi', 'Bob')
