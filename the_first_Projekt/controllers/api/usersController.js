/**
 * @author Bilal Alnaani 
 * @version 1.0.0
 * @description API useres controller used to handle the model 
 */

const Controller = require('../../core/controller.js')

class ApiUsersController extends Controller {

    constructor(...args) {
        super(...args);
        const self = this;

        self.format = Controller.HTTP_FORMAT_JSON;
    }

    async actionIndex() {
        const self = this;

        let users = [];
        let error = null;

        try {
            users = await self.db.User.findAll({
                where: {}
            });
        } catch (err) {
            error = err;
        }

        if (error) {
            self.render({
                details: error
            }, {
                statusCode: 500
            });
        } else {
            self.render({
                users: users
            });
        }
    }

    async actionShow() {
        const self = this;

        let userId = self.param('id');
        let user = null;
        let error = null;

        try {
            user = await self.db.User.findOne({
                where: {
                    id: userId
                }
            });
        } catch (err) {
            error = err;
        }

        if (error !== null) {
            console.error(error);
            self.render({
                details: error
            }, {
                statusCode: 500
            });
        } else {
            self.render({
                user: user
            });
        }
    }
}

module.exports = ApiUsersController;