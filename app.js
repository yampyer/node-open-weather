const lugar = require('./lugar/lugar');

const argv = require('yargs').options({
    direction: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).help().argv

lugar.getLugar(argv.direction).then(response => {
    console.log(response);
}).catch(error => console.log(error));