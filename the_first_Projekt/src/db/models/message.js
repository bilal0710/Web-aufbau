'use strict';
module.exports = (sequelize, DataTypes) => {
    const Message = sequelize.define('Message', {

        text: DataTypes.STRING,
        allowNull: false

    }, {

        tableName: 'message'
    });
    Message.associate = function(models) {
        Message.belongsTo(models.User, {
            as: 'from',
            foreignKey: 'fromId'
        });
        Message.belongsTo(models.User, {
            as: 'to',
            foreignKey: 'toId'
        });

    };
    return Message;
};