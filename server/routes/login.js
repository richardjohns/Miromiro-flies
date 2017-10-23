const {userExists, createUser} = require('../db/login')

const express = require('express')
const router = express.Router()

const bodyParser = require('body-parser')

router.use(bodyParser.json())

router.post('/register', register)

function register (req, res) {
  const {username, password} = req.body
  // make sure username doesn't already exist

  userExists(username)
    .then(exists => {
      if (exists) {
        return res.status(400).send({message: 'User exists'})
      }
      createUser(username, password)
        .then(() => res.status(201).send({message: 'user created'}))
    })
    .catch(err => {
      res.status(500).send({message: err.message})
    })
}
// .status(200)-is when you attach a message
// .sendStatus(200)-is when you are just sending a status code
// .sendStaus(201) - return created

module.exports = router
