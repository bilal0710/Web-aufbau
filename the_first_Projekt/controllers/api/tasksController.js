/**
 * @author Bilal Alnaani 
 * @version 1.0.0
 * @description API tasks controller used to handle the model resource
 */

const Controller = require('../../core/controller.js')

class ApiTasksController extends Controller {

    constructor(...args) {
        super(...args);
        const self = this;

        self.format = Controller.HTTP_FORMAT_JSON;
    }

    async actionIndex() {
        const self = this;

        let tasks = [];
        let error = null;

        try {
            tasks = await self.db.Task.findAll({
                where: {},
                attributes: ['id', 'name', 'text'],
                include: self.db.Task.extendInclude

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
                tasks: tasks
            });
        }
    }

    // um ein User zu zeigen
    async actionShow() {
        const self = this;

        let taskId = self.param('id');
        let task = null;
        let error = null;

        try {
            task = await self.db.Task.findOne({
                where: {
                    id: taskId
                },
                attributes: ['id', 'name', 'text'],
                include: self.db.Task.extendInclude
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
                task: task
            });
        }
    }
    async actionShow() {
        const self = this;

        let taskId = self.param('id');
        let task = null;
        let error = null;

        try {
            task = await self.db.Task.findOne({
                where: {
                    id: taskId
                },
                attributes: ['id', 'name', 'createdAt', 'updatedAt'],
                include: self.db.Task.extendInclude
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
                task: task
            });
        }
    }

    async actionCreate() {
        const self = this;

        let remoteData = self.param('task');

        let task = null;
        let error = null;

        try {
            task = await self.db.sequelize.transaction(async(t) => {
                let newTask = self.db.Task.build();
                newTask.writeRemotes(remoteData);

                await newTask.save({
                    transaction: t
                });

                return newTask;
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
                task: task
            });
        }
    }
}

module.exports = ApiTasksController;