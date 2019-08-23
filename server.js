const express = require('express')
const logger = require('morgan')
const windData = require('./routes/windData')
const bodyParser = require('body-parser')
const mongoose = require('./config/database')
const fetch = require('node-fetch')
const windDataController = require('./app/controllers/windData')
const CONFIG = require('./config/config')
const app = express()

mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error'))

app.use(logger('dev'))

app.use(bodyParser.json({ extended: true }))

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')// update to match the domain you will make the request from
  next()
})

app.get('/', function (req, res) {
  res.json({ 'status': 'OK' })
})

app.use('/wind_data', windData)

// handle errors
app.use(function (err, req, res, next) {
  console.log(err)

  if (err.status === 404) { res.status(404).json({ message: 'Not found' }) } else { res.status(500).json({ message: 'Backend error' }) }
})

app.listen(CONFIG.port, function () {
  console.log(`Node server listening on port ${CONFIG.port}`)
})

function fetchData (ip) {
  fetch(ip).then(res => res.json()).then(json => windDataController.createAll(json))
}

setInterval(() => fetchData('http://192.168.30.199:9090'), 6000)
