const baseTemp = 14;
const deviation = 2;

function getTemperature() {
  return baseTemp + Math.random() * deviation;
}

module.exports = { getTemperature };
