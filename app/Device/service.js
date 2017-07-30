const apn = require('apn')
const gcm = require('node-gcm-service')

function DeviceService(){

}

function sendiOSNotification(token, cb){
  let apnProvider = new apn.Provider({
    cert: config['keys']['ios']['certPath'],
    production: false
  })

  let deviceToken = token
  var note = new apn.Notification()

  note.expiry = Math.floor(Date.now() / 1000) + 3600 // Expires 1 hour from now.
  note.badge = 1
  note.sound = "ping.aiff"
  note.alert = "demo test"
  note.topic = config['keys']['ios']['UID']

  apnProvider.send(note, deviceToken).then( (result) => {
    return cb(null, result)
  });
}

function sendAndroidNotification(token, cb){
  let message = new gcm.Message({
    data : {
      title: 'demo test',
      message: 'test'
    },
    delay_while_idle : false,
    dry_run : false
  })
  let sender = new gcm.Sender()
  sender.setAPIKey(config['keys']['android']['APIkey'])
  sender.sendMessage(message.toString(), token, true, function(err, data){
    return cb(err, data)
  });
}

DeviceService.push = function(osType, token, cb) {
  if(osType === 'ios'){
    return sendiOSNotification(token, cb)
  }else if (osType === 'android') {
    return sendAndroidNotification(token, cb)
  }
}

module.exports = DeviceService
