'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('user', [{
            firstName: 'johe',
            lastName: 'Doe',
            email: 'deo@fh-erfurt.de'
        }], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('user', null, {});

    }
};