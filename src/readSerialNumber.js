const executeAsSudo = require('./utils/sudo')

const commandByPlatform = {
    linux: 'dmidecode -s system-serial-number',
    win32: 'WMIC BIOS GET SERIALNUMBER',
    win64: 'WMIC BIOS GET SERIALNUMBER'
}

async function readSerialNumber () {

    const serialNumber = await executeAsSudo(commandByPlatform[process.platform])

    console.log('serialNumber: ', serialNumber);
    return serialNumber
}

module.exports = readSerialNumber