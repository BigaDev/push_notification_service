const express = require('express')
const app = express()
const PORT = 8990
const bodyParser = require('body-parser')
const DB = require('./configs/db')
const fs = require('fs')
const config = JSON.parse(fs.readFileSync('./configs/configs.json', 'utf8'))

// parse application/json
app.use(bodyParser.json())

// Controller
const DeviceController = require('./app/Device/api')

// Register Token
app.post('/api/v1/device/register', function(req, res){
  return DeviceController.register(req, res)
})

DB.initialize(function(err){
  app.listen(PORT, function () {
    // DB
    db = DB.db
    console.log(`server listening on port ${PORT}!`)
  })
})
