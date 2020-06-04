/**
 * @author Bilal Alnaani 
 * @version 1.0.0
 * @description API useres controller used to handle the model ressource
 */

// um das Programm automatisch zu starten, können wir den Befehl npx nodemon ./index.js

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

    // um ein User zu zeigen
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

    async actionCreate() {
        const self = this;

        let remoteData = self.param('user');

        let user = null;
        let error = null;

        try {
            user = await self.db.Sequelize.transaction(async(t) => {

                let newUser = self.db.User.build();
                newUser.writeRemotes(remoteData);

                await newUser.save({
                    transaction: t
                });

                return newUser;
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