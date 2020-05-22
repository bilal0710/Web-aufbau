 /**
  * @author Bilal Alnaani
  * @version 1.0.0
  * @description PagesController fpr default pages like home, login privacy terms ....
  */

 class PagesController {

     constructor(router, req, res, action) {
         const self = this;

         self.router = router;
         self.req = req;
         self.res = res;
         self.action = action;
     }

     actionIndex() {
         const self = this;
         self.res.send('Hello World!');
     }

 }

 module.exports = PagesController;