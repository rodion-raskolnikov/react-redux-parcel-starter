const path = require('path');
const Bundler = require('parcel-bundler');
const express = require('express');
const proxy = require('http-proxy-middleware');

const API_PROTOCOL = process.env.API_PROTOCOL || 'http';
const API_HOST = process.env.API_HOST || 'localhost';
const API_PORT = process.env.API_PORT || 8090;

const app = express();

app.use('/api', proxy({
    target: `${API_PROTOCOL}://${API_HOST}:${API_PORT}`,
    logLevel: 'debug',
    changeOrigin: true,
}));

const file = path.join(__dirname, '../html/index.html');
const options = {
    // minify: true,
};

const bundler = new Bundler(file, options);

app.use(bundler.middleware());

const PORT = process.env.PORT || 3000;
app.listen(PORT);
