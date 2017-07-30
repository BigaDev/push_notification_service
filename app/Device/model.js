function DeviceModel(){

}

function isIOS(token){
  const iOSTokenPattern = /^[a-z0-9]{64}$/
  let results = token.match(iOSTokenPattern)
  return results != null && results.length > 0
}

function isGCM(token){
  return token.length <= 256
}

DeviceModel.validateTokenType = function(token, type){
  if(type === 'ios' && isIOS(token))
    return 'ios'
  if(type === 'android' && isGCM(token))
    return 'android'
  return null
}

module.exports = DeviceModel
