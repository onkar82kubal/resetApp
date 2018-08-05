const Sequelize = require('sequelize');
const configFile = (process.env.NODE_ENV ? process.env.NODE_ENV.toLowerCase() : 'local') + '.json';
const config = require('./config/' + configFile);
const sequelize = new Sequelize(
    config.mysql.database,
    config.mysql.user,
    config.mysql.password, {
        host: config.mysql.host,
        port: config.mysql.port,
        dialect: config.mysql.dialect,
        logging: config.mysql.logging,
        freezeTableName: config.mysql.freezeTableName,
        operatorsAliases: config.mysql.operatorsAliases
    }
);
const models = require('./models')(sequelize);

module.exports = {
    sequelizeModels: models,
    sequelize: sequelize
};