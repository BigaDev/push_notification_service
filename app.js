const express = require('express')
const app = express()
const PORT = 8990
const bodyParser = require('body-parser')

// parse application/json
app.use(bodyParser.json())

app.listen(PORT, function () {
  console.log(`server listening on port ${PORT}!`)
})
