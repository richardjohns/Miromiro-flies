const express = require('express')
const router = express.Router()

const db = require('../dbFunctions')
const bodyParser = require('body-parser')

router.use(bodyParser.json())

router.get('/', function (req, res) {
  db.getUsers()
    .then(users => {
      res.json(users)
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})


module.exports = router