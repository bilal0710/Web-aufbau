 /**
  * @author Bilal Alnaani
  * @version 1.0.0
  * @description include all routes defined by path and controller class.
  */


 const PagesController = require('../controllers/pagesController.js');

 let routes = {
     'pages': {
         controller: PagesController,
         actions: [
             { path: '/', action: 'index', method: 'get' },
             { path: '/imprint', action: 'imprint', method: 'get' }


         ]
     }


 };
 module.exports = routes;