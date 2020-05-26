 /**
  * @author Bilal Alnaani
  * @version 1.0.0
  * @description PagesController fpr default pages like home, login privacy terms ....
  */

 const Controller = require('../core/controller.js');

 class PagesController extends Controller {


     actionIndex() {
         const self = this;
         self.render('Hello World!');
     }

 }

 module.exports = PagesController;