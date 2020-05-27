 /**
  * @author Bilal Alnaani
  * @version 1.0.0
  * @description PagesController fpr default pages like home, login privacy terms ....
  */

 const Controller = require('../core/controller.js');

 class PagesController extends Controller {

     constructor(...args) {
         super(...args);

         const self = this;

         self.before(['*', '-imprint'], (next) => {
             console.log('all pages');

             next();
         });

         self.before('index', (next) => {
             console.log('only index');
             next();
         });
     }

     actionIndex() {
         const self = this;
         self.db.User.findAll().then(users => {
             self.render({
                 title: 'Hello World',
                 users: users
             });
         });
     }

     actionImprint() {
         const self = this;
         self.render({
             title: 'Imprint'

         });
     }

 }

 module.exports = PagesController;