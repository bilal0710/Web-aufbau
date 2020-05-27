 /**
  * @author Bilal Alnaani
  * @version 1.0.0
  * @description include all routes defined by path and controller class.
  */

 const PagesController = require('../controllers/pagesController.js');
 const ApiUsersController = require('../controllers/api/usersController.js');

 let routes = {
     'pages': {
         controller: PagesController,
         actions: [
             { path: '/', action: 'index', method: 'get' },
             { path: '/imprint', action: 'imprint', method: 'get' }
         ]
     },
     'api/users': {
         controller: ApiUsersController,
         actions: [
             { path: '/api/users', action: 'index', method: 'GET' },
             { path: '/api/users/:id', action: 'show', method: 'GET' }
         ]
     }
 }

 module.exports = routes;