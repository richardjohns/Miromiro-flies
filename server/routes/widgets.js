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
  res.sendStatus(200)
})

module.exports = router
