/**
 * @author Bilal Alnaani
 * @version 1.0.0
 * @description core Controller
 *  
 */

const ejs = require('ejs');
const path = require('path');

const defaultRenderOptions = {
    statusCode: 200,
    layout: true,
    layoutFileName: 'layout.html.ejs'
};

class Controller {

    constructor(router, req, res, action) {
        const self = this;

        self.router = router;
        self.req = req;
        self.res = res;
        self.action = action;

        self.beforeList = [];
    }
    get db() {
        return this.router.database;
    }

    before(actions, fn) {
        const self = this;

        if (actions == 'string') {
            actions = [actions];
        }
        self.beforeList.push({
            actions: actions,
            fn: fn
        });

    }
    executeBeforeList(cb, index = 0) {
        const self = this;
        if (index >= self.beforeList.length) {
            cb();
        } else {
            self.executeBefore(self.beforeList[index], () => {
                process.nextTick(function() {
                    self.executeBeforeList(cb, ++index);
                });
            });
        }
    }

    executeBefore(before, cb) {
        const self = this;
        if (before.actions.indexOf('*') !== -1 && before.actions.indexOf('-' + self.action) === -1 ||
            before.actions.indexOf(self.action) !== -1) {
            before.fn.apply(self, [cb]);
        } else {
            process.nextTick(function() {
                cb();
            });

        }
    }


    render(params, opts = {}) {
        const self = this;

        opts = Object.assign(defaultRenderOptions, opts);

        self.res.status(opts.statusCode);

        let controllerName = (self.constructor.name.charAt(0).toLowerCase() + self.constructor.name.slice(1)).replace('Controller', '');
        let filePath = path.join(__dirname, '..', 'views', controllerName, self.action + '.html.ejs');

        params.self = self;

        ejs.renderFile(filePath, params, {}, (err, htmlStr) => {
            if (err) {
                console.error(err);
            } else {
                if (opts.layout === false) {
                    self.res.send(htmlStr);
                } else {
                    params.body = htmlStr;

                    let layoutFilePath = path.join(__dirname, '..', 'views', opts.layoutFileName);

                    ejs.renderFile(layoutFilePath, params, {}, (err, htmlStr) => {
                        if (err) {
                            console.error(err);
                        } else {
                            self.res.send(htmlStr);
                        }
                    });
                }
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