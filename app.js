const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direction: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).help().argv

let getInfo = async direction => {
    try {
        let coords = await lugar.getLugar(direction);
        let temp = await clima.getWeather(coords.lat, coords.lng);

        return `El clima en ${coords.direccion} es de ${temp}`;
    } catch (e) {
        return `No se pudo determinar el clima en ${direction}`;
    }
}

getInfo(argv.direction)
    .then(response => console.log(response))
    .catch(error => console.log(error));

/* lugar.getLugar(argv.direction).then(response => {
    console.log(response);
}).catch(error => console.log(error));

clima.getWeather(40.4167754, -3.7037902).then(response => {
    console.log(response);
}).catch(error => console.log(error)); */