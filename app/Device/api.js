// Device Controller

function DeviceAPI(){

}

// Register API Handler
// input: APN or GCM
// process: validate token then save it if it didn't exist before
// output: success => true if it saved or false with errors messages

DeviceAPI.register = function(req, res){
  res.json({'success': true})
}

module.exports = DeviceAPI
