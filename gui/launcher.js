let {PythonShell} = require('python-shell')
let path = require("path")

function get_weather() { 
  var options = {
    scriptPath : path.join(__dirname, '/')
  }

  let pyshell = new PythonShell('main.py', options);

  pyshell.on('message', function(message) {
    console.log(message)
  })
}
