 /**
  * @author Bilal Alnaani
  * @version 1.0.0
  * @description core Controller
  *  
  */

 class Controller {

     constructor(router, req, res, action) {
         const self = this;

         self.router = router;
         self.req = req;
         self.res = res;
         self.action = action;
     }

     render(params, opts = {}) {
         const self = this;
         self.res.send(params);
     }

 }

 module.exports = Controller;