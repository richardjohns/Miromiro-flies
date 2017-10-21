const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')
const request = require('superagent')

const widgets = require('./routes/widgets')
const beers = require('./routes/beers')
const users = require('./routes/users')

const app = express()

app.use(bodyParser.json())
app.use(cors({origin: 'http://localhost:8080'}))
app.use(express.static(path.join(__dirname, '../public')))

// db routes
app.use('/v1/widgets', widgets)
app.use('/v1/beers', beers)
app.use('/v1/users', users)
// api calls
app.use('/api/v1/memes', (req, res) => {
    // const id = Number(req.params.id)
    request
        .get(`https://api.imgflip.com/get_memes`)
        // set sets the header of the request in the format required by the api.
        // .set('Accept', 'application/json')
        .end((err, response) => {
            if (err) {
                // console.log(err)
            } else {
                res.json(response.body)
                // console.log(response.body)
            }
        })
})

// Handles all routes so you do not get a not found error
// app.get('*', function (request, response) {
//     response.sendFile(path.resolve(__dirname, 'public', 'index.html'))
// })

module.exports = app
