const express = require('express')
const router = express.Router()

const db = require('../db')
const bodyParser = require('body-parser')

router.use(bodyParser.json())

router.get('/', function (req, res) {
    db.getBeers()
        .then(beers => {
            // console.log(beers)
            res.json(beers)
        })
        .catch(err => {
            res.status(500).send(err.message)
        })
})


module.exports = router

