const express = require('express')
const app = express()
const PORT = 8990
const bodyParser = require('body-parser')

// parse application/json
app.use(bodyParser.json())

// Controller
const DeviceController = require('./app/Device/api')

// Register Token
app.post('/api/v1/device/register', function(req, res){
  return DeviceController.register(req, res)
})

app.listen(PORT, function () {
  console.log(`server listening on port ${PORT}!`)
})
