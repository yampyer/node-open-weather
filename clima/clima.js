const axios = require('axios');

const getWeather = async(lat, lng) => {

    let response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=deb55e91afad8ab1c643d24dd6e1ef2b`);

    if (response.statusText !== 'OK') {
        throw new Error(`No hay resultados para las coordenadas, lat: ${lat}, lng: ${lng}`);
    }

    return response.data.main.temp;
}

module.exports = {
    getWeather
}