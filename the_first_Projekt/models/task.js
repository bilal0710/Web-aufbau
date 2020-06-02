module.exports = function(Model, db) {
    Model.extendInclude = [{
            model: db.User,
            as: 'creator',
            attributes: ['id', 'firstName', 'lastName'],
            limit: 1,
            separate: false
        },
        {
            model: db.User,
            as: 'assignedTo',
            attributes: ['id', 'firstName', 'lastName'],
            limit: 1,
            separate: false
        },
        {
            model: db.Project,
            as: 'project',
            attributes: ['id', 'name'],
            limit: 1,
            separate: false
        },
    ];
};