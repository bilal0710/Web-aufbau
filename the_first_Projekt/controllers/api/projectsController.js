/**
 * @author Bilal Alnaani 
 * @version 1.0.0
 * @description API project controller used to handle the model resource
 */

const Controller = require('../../core/controller.js')

class ApiProjectsController extends Controller {

    constructor(...args) {
        super(...args);
        const self = this;

        self.format = Controller.HTTP_FORMAT_JSON;
    }

    async actionIndex() {
        const self = this;

        let projects = [];
        let error = null;

        try {
            projects = await self.db.Project.findAll({
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
                projects: projects
            });
        }
    }

    // um ein User zu zeigen
    async actionShow() {
        const self = this;

        let projectId = self.param('id');
        let project = null;
        let error = null;

        try {
            project = await self.db.Project.findOne({
                where: {
                    id: projectId
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
                project: project
            });
        }
    }
}

module.exports = ApiProjectsController;