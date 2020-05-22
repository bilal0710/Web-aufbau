 class Router {

     constructor(app, routes) {
         const self = this;

         self.app = app;
         self.routes = routes;
     }

     setup() {
         const self = this;

         // go through all routes
         for (let name in self.routes) {

             const group = self.routes[name];
             for (let index = 0; index < group.actions.length; ++index) {
                 const action = group.actions[index];

                 self.app[action.method.toLowerCase()](action.path, (req, res) => {
                         let controller = new group.controller(self, req, res, action.action);
                         let actionName = 'action' + action.action.charAt(0).toUpperCase() + action.action.slice(1);
                         controller[actionName]();
                     }

                 );
             }
         }
     }
 }

 module.exports = Router;