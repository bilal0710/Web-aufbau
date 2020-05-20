 /**
  * @author Bilal Alnaani
  * @version 1.0.0
  * @description index.js is our launch start point to initialize the application with all needs.
  */

 const express = require("express");
 const app = express();
 const http = require("http").createServer(app);

 app.get('/', (req, res) => {
     console.log("Hello Bilal!");
 });

 http.listen(3000, function() {
     console.log('App listing at http://localhost:3000');
 });