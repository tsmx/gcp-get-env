const express = require('express');
const app = express();
const { getEnv } = require('./functions/function');

const httpPort = process.env.PORT || 3030;

app.get('/', (req, res) => { getEnv(req, res); });

app.listen(httpPort, () => { console.log('Listening on port ' + httpPort + '...'); });