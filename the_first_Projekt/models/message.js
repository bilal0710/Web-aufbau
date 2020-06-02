module.exports = function(Model, db) {
    Model.extendInclude = [{
            model: db.User,
            as: 'from',
            attributes: ['id', 'firstName', 'lastName'],
            limit: 1,
            separate: false
        },
        {
            model: db.User,
            as: 'to',
            attributes: ['id', 'firstName', 'lastName'],
            limit: 1,
            separate: false
        }
    ];
};