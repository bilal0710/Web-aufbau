'use strict';
// diese Migration wird Automatisch erzeugt mit einer Befehl
//npx sequekize-cli model: generate --name User (name der Modul) --attribute firstName:string,lastName:string,email:string
//damit wird auch das Modul automatisch erzeugt aber muss man es einbisschen bearbeiten
//um diese Tablle in der DB hinzufügen, muss man sie mit einem andern Befehl hinfügt, 
//npx sequelize-cli db:migrate
//npx sequelize-cli db:migrate:undo (um sie zu löschen)
module.exports = {

    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('user', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            firstName: {
                type: Sequelize.STRING,
                allowNull: false
            },
            lastName: {
                type: Sequelize.STRING,
                allowNull: false
            },
            email: {
                type: Sequelize.STRING,
                allowNull: false
            },
            createdAt: {
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: true,
                type: Sequelize.DATE
            },
            permission: {
                allowNull: false,
                type: Sequelize.INTEGER,
                defaultValue: 0,
                comment: 'bit mask of permission from 2^0 until 2^30'
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('user');
    }
};