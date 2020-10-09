const temperature = require('../modules/temperature');

function getTemperature(_, response) {
  const currentTemperature = temperature.getTemperature();
  response.send(`${currentTemperature.toFixed(2)}`);
}

module.exports = { getTemperature };
