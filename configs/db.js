const MongoDB = require('mongodb')
const MongoClient = require('mongodb').MongoClient

module.exports = {
  initialize: function(cb){
    MongoClient.connect("mongodb://localhost:27017/pushbots_dev", function(err, database) {
      if(err) throw err
      console.log("DB connection Ready")
      module.exports.db = database
      return cb()
    })
  }
}
