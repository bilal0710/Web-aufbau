/**
 * @author Bilal Alnaani
 * @version 1.0.0
 * @description Used to load all models and set correct schema.
 */



module.exports = function() {
    const Sequelize = require('sequelize');
    const sequelize = new Sequelize('taskboard', 'root', '', {
        host: 'localhost',
        dialect: 'mysql',
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }

    });

    const db = {
        Sequelize: Sequelize,
        Sequelize: sequelize
    };
    const User = sequelize.define('user', {
        firstName: {
            type: Sequelize.STRING,
            allowNull: false
        },
        lastName: {
            type: Sequelize.STRING,
            allowNull: false
        }
    }, {
        tableName: 'user'
    });



    return db;
};