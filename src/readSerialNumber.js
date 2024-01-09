const executeAsSudo = require('./utils/sudo')
const childProcess = require('child_process')

const commandByPlatform = {
    linux: 'dmidecode -s system-serial-number',
    win32: 'WMIC BIOS GET SERIALNUMBER',
    win64: 'WMIC BIOS GET SERIALNUMBER'
}

async function readSerialNumber () {

    let serialNumber = ''

    if (!(process.platform === 'linux' || process.platform === 'darwin')) {
        serialNumber = await executeAsSudo(commandByPlatform[process.platform])
    } else {
        serialNumber = childProcess.execSync(commandByPlatform[process.platform]).toString()
    } 

    console.log('serialNumber: ', serialNumber);
    return serialNumber
}

module.exports = readSerialNumber