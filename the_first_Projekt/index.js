/**
 * @author Bilal Alnaani
 * @version 1.0.0
 * @description index.js is our launch start point to initialize the application with all needs.
 */

const express = require('express');
const app = express();
const http = require('http').createServer(app);

// write global Configuration
global.cfg = require('./config/config.js');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/assets', express.static('assets'));

const database = require('./core/database.js')();

const routes = require('./config/routes.js');
const Router = require('./core/router.js');
const router = new Router(app, routes, database);
router.setup();


http.listen(3000, function() {
    console.log('App listing at http://localhost:3000');
});