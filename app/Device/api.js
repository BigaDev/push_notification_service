// Device Model
const DeviceModel = require('./model')

// Device Controller
function DeviceAPI(){

}

/* Register API Handler
 input: APN or GCM
 process: validate token then save it if it didn't exist before
 output: success => true if it saved or false with errors messages
 Note: I can get token OS type from request itself by check this field
 req.headers['user-agent'] or use this npm package https://www.npmjs.com/package/platform
 const platform = require('platform')
 platform.os
 but here for test I will send os type as parameter
*/
DeviceAPI.register = function(req, res){
  // check exist of params
  if(req.body.token === undefined)
    return res.json({success: false, message: 'device token must be sent'})
  if(req.body.os === undefined)
    return res.json({success: false, message: 'device OS must be sent'})

  //validate token
  const token = req.body.token
  const osType = req.body.os
  if(DeviceModel.validateTokenType(token, osType) === null)
    return res.json({success: false, message: 'device token not invalid'})

  // check if it exist before
  DeviceModel.findByToken(token, function(docs){
    if(docs.length > 0)
      return res.json({success: false, message: 'device token inserted before'})

    // insert device into DB
    DeviceModel.insert(token, osType, function(){
      res.json({success: true, message: 'device token has been inserted successfully'})
    })
  })
}

module.exports = DeviceAPI
