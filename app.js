const express = require('express')
const app = express()
const PORT = 8990

app.listen(PORT, function () {
  console.log(`server listening on port ${PORT}!`)
})
