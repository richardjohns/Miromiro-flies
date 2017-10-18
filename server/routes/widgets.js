const express = require('express')
const router = express.Router()

const db = require('../db')
const bodyParser = require('body-parser')

router.use(bodyParser.json())

// router.get('/', function (req, res) {
//   db.getUsers()
//     .then(users => {
//       res.json(users)
//     })
//     .catch(err => {
//       res.status(500).send(err.message)
//     })
// })

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


