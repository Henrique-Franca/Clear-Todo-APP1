const allowCors = require('./cors')
const bodyParser = require('body-parser')
const express = require('express')
const cors = require('cors')
const server = express()
const port = 3003
server.use(bodyParser.urlencoded({ extended: true}))
server.use(bodyParser.json())
server.use(allowCors)
server.use(cors())
server.listen(port, function() {
    console.log(`BACKEND is running on port ${port}.`)
})
module.exports = server