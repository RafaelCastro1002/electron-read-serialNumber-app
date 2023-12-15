var sudo = require('sudo-prompt');

var options = {
    name: 'Read Serial Number App',
  };

function executeAsSudo (command) {
    return new Promise((resolve, reject) => {
        sudo.exec(command, options, function (error, stdout, stderr) {
            if (error) reject(error);

            console.log('stdout: ' + stdout);
            resolve(stdout)
        })
    })
}

module.exports = executeAsSudo