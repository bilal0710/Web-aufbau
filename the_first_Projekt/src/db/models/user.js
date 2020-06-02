'use strict';
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        firstName: {
            type: DataTypes.STRING(70),
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING(70),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(320),
            allowNull: false
        },
        passwordHash: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        permission: {
            allowNull: false,
            type: DataTypes.INTEGER,
            defaultValue: 0,
            comment: 'bit mask of permission from 2^0 until 2^30'
        }

    }, {
        tableName: 'user'
    });

    User.associate = function(models) {
        // associations can be defined here
    };
    return User;
};