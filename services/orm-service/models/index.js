module.exports = function(sequelize) {
    var models = {};
    Users = models.users = sequelize.import(__dirname + '/user');
    return models;
};