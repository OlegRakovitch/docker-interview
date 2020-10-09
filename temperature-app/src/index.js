const express = require('express');
const temperature = require('./handlers/temperature');

const app = express();
const port = process.env.PORT;

app.get('/', temperature.getTemperature);
app.listen(port, initializeApplication);

function initializeApplication() {
  console.log(`Application is listening on port ${port}`);
}
