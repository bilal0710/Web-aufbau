/**
 * @author Bilal Alnaani 
 * @version 1.0.0
 * @description API messages controller used to handle the model resource
 */

const Controller = require('../../core/controller.js')

class ApiMessagesController extends Controller {

    constructor(...args) {
        super(...args);
        const self = this;

        self.format = Controller.HTTP_FORMAT_JSON;
    }

    async actionIndex() {
        const self = this;

        let messages = [];
        let error = null;

        try {
            messages = await self.db.Message.findAll({
                where: {},
                attributes: ['id', 'text', 'createdAt', 'updatedAt'],
                include: self.db.Message.extendInclude
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
                messages: messages
            });
        }
    }

    // um ein User zu zeigen
    async actionShow() {
        const self = this;

        let messageId = self.param('id');
        let message = null;
        let error = null;

        try {
            message = await self.db.Message.findOne({
                where: {
                    id: messageId
                },
                attributes: ['id', 'text', 'createdAt', 'updatedAt'],
                include: self.db.Message.extendInclude
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
                message: message
            });
        }
    }
}

module.exports = ApiMessagesController;