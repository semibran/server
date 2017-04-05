const http = require('http')
const express = require('express')

module.exports = createServer

function createServer(path) {
  var app = createApp(path)
  var server = http.createServer(app)
  return server
}

function createApp(path) {
  var app = express()
  app.use(express.static(path))
  app.get('/', (req, res) => res.sendFile(path))
  return app
}
