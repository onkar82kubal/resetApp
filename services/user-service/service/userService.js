const env = process.env.NODE_ENV || 'local';
const orm = require('./../../orm-service');
const request = require('request');
const Q = require('q');
const configs = require('../config/' + env + '.json');

module.exports = {
    post: function(reqData) {
        let deferred = Q.defer();
        let model = orm.sequelizeModels;
        model.users.create({
            firstname: reqData.firstname,
            lastname: reqData.lastname,
            email: reqData.email,
            password: reqData.password,
        }).then(function(data) {
            deferred.resolve(data);
        }, function(error) {
            deferred.reject(error);
        })
        return deferred.promise;
    },
    get: function(req) {
        console.log(req);
    },
    put: function(req) {

    },
    patch: function(req) {

    },
    delete: function(req) {

    }

};