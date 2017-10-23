var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
var path = require('path')

var widgets = require('./routes/widgets')
var beers = require('./routes/beers')
var users = require('./routes/users')
var login = require('./routes/login')

var app = express()

app.use(bodyParser.json())
app.use(cors({origin: 'http://localhost:8080'}))
app.use(express.static(path.join(__dirname, '../public')))
// Router
app.use('/v1/widgets', widgets)
app.use('/v1/beers', beers)
app.use('/v1/users', users)
// API - this one calls from db
app.use('/v1/auth/register', login)

// Handles all routes so you do not get a not found error
app.get('*', function (request, response) {
    response.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

module.exports = app
