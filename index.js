const express = require('express');
const app = express();
const { getEnv } = require('./functions/function');

const httpPort = process.env.PORT || 3030;

const functions = require('@google-cloud/functions-framework');
functions.http('getEnv2', (req, res) => { getEnv(req, res); });

if (process.env['GAE_RUNTIME'] && process.env['GAE_SERVICE']) {
    app.get('/', (req, res) => { getEnv(req, res); });
    app.listen(httpPort, () => { console.log('Listening on port ' + httpPort + '...'); });
}