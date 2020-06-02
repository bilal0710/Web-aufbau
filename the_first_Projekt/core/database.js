/**
 * @author Bilal Alnaani
 * @version 1.0.0
 * @description Used to load all models and set correct schema.
 */


// Sequelize ist die Schnittstelle mit der DB, sie hat alle wichtigen Befehle, die man am meisten nutzt

const Sequelize = require('sequelize');
const path = require('path');
const fs = require('fs');

module.exports = function() {
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
    // wir haben hier das Path, wo die Models von der Schnittstelle mit der db sind
    let modelsPath = path.join(__dirname, '..', 'src', 'db', 'models');
    let files = fs.readdirSync(modelsPath);

    //es gibt Datai, die automatisch hingefügt werden und wir nicht wirklich nutzen, sie fangen immer mit (.), die wollten wir filtern
    files = files.filter(file => {
        return (file.indexOf('.') !== 0 && file.slice(-3) === '.js');
    });

    files.forEach(file => {
        const model = sequelize.import(path.join(modelsPath, file));
        db[model.name] = model;

    });

    //wir werden es später nutzen 
    Object.keys(db).forEach(modelName => {

        try {
            let filePath = path.join(__dirname, '..', 'models', modelName + '.js');
            if (fs.existsSync(filePath)) {

                require(filePath)(db[modelName], db);
            }

        } catch (err) {
            console.error(err);
        }

        if (db[modelName].associate) {
            db[modelName].associate(db);
        }
    })

    return db;
};