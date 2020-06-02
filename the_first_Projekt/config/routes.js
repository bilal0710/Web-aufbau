 /**
  * @author Bilal Alnaani
  * @version 1.0.0
  * @description include all routes defined by path and controller class.
  */

 const PagesController = require('../controllers/pagesController.js');
 const ApiUsersController = require('../controllers/api/usersController.js');
 const ApiTasksController = require('../controllers/api/tasksController.js');
 const ApiProjectsController = require('../controllers/api/projectsController.js');
 const ApiMessagesController = require('../controllers/api/messagesController.js');




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
             { path: '/api/users', action: 'index', method: 'GET' }, // für alle Users
             { path: '/api/users/:id', action: 'show', method: 'GET' } // für one User
         ]
     },
     'api/tasks': {
         controller: ApiTasksController,
         actions: [
             { path: '/api/tasks', action: 'index', method: 'GET' }, // für alle Tasks
             { path: '/api/tasks', action: 'create', method: 'POST' },
             { path: '/api/tasks/:id', action: 'show', method: 'GET' } // für one Task
         ]
     },
     'api/project': {
         controller: ApiProjectsController,
         actions: [
             { path: '/api/projects', action: 'index', method: 'GET' }, // für alle projects
             { path: '/api/projects/:id', action: 'show', method: 'GET' } // für one project
         ]
     },
     'api/message': {
         controller: ApiMessagesController,
         actions: [
             { path: '/api/messages', action: 'index', method: 'GET' }, // für alle messages
             { path: '/api/messages/:id', action: 'show', method: 'GET' } // für one message
         ]
     }
 }

 module.exports = routes;