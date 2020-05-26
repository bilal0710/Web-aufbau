/**
 * @author Bilal Alnaani
 * @version 1.0.0
 * @description core Controller
 *  
 */

const ejs = require('ejs');
const path = require('path');



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

        if (!opts.statusCode) {
            opts.statusCode = 200;
        }

        self.res.status(opts.statusCode);

        let controllerName = (self.constructor.name.charAt(0).toLowerCase() + self.constructor.name.slice(1)).replace('Controller', '');
        let filePath = path.join(__dirname, '..', 'views', controllerName, self.action + '.html.ejs');

        params.self = self;

        ejs.renderFile(filePath, params, {}, (err, htmlStr) => {
            if (err) {
                console.error(err);
            } else {

                params.body = htmlStr;

                let layoutFilePath = path.join(__dirname, '..', 'views', 'layout.html.ejs');

                ejs.renderFile(layoutFilePath, params, {}, (err, htmlStr) => {
                    if (err) {
                        console.error(err);
                    } else {
                        self.res.send(htmlStr);
                    }
                });
            }
        });
    }

    urlFor(...args) {
        return this.router.urlFor(...args);
    }

    redirect(url = '/') {
        return self.res.redirect(302, url);
    }
}

module.exports = Controller;