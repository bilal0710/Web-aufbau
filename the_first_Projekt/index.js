 /**
  * @author Bilal Alnaani
  * @version 1.0.0
  * @description index.js is our launch start point to initialize the application with all needs.
  */

 const express = require("express");
 const app = express();
 const http = require("http").createServer(app);

 const routes = require('./config/routes.js');
 const Router = require('./core/router.js');
 const router = new Router(app, routes);
 router.setup();


 http.listen(3000, function() {
     console.log('App listing at http://localhost:3000');
 });


 const Sequelize = require('sequelize');
 const sequelize = new Sequelize('taskboard', 'root', '', {
     host: 'localhost',
     dialect: 'mysql',
     pool: {
         max: 5,
         min: 0,
         acquire: 30000,
         idle: 10000
     }

 });

 sequelize
     .authenticate()
     .then(() => {
         console.log('OK');
     })
     .catch((err) => {
         console.log(err);
     });