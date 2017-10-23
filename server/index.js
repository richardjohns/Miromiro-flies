var server = require('./server')

var PORT = process.env.PORT || 3000

server.listen(PORT, function () {
  console.log('Listening on port', PORT)
})

// Sat-4-boys server link code
// var createServer = require('./server')

var environment = process.env.NODE_ENV || 'development'
var config = require('./knexfile')[environment]
var connection = require('knex')(config)

// var server = createServer(connection)

module.exports = connection

