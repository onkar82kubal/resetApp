const env = process.env.NODE_ENV || 'local';
const userService = require('./../service/userService');
const configs = require('../config/' + env + '.json');
const logger = require('./../../loger-service');

module.exports = {
    post: function(req, res) {
        let data = {
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            password: req.body.password,
        }
        logger.info('Request ID =>' + req.id);
        userService.post(data).then(function(response) {
                res.status(200).send(response.dataValues);
                logger.info(JSON.stringify(response.dataValues));
            },
            function(error) {
                res.status(400).send(error);
                logger.error(error);
            })
    },
    get: function(req, res) {
        userService.get(req).then(function(data) {
            res.status(200).send(data)
        }, function(error) {
            res.status(400).send(error);
        })
    },
    put: function(req, res) {
        userService.put(req).then(function(data) {
            res.status(200).send(data)
        }, function(error) {
            res.status(400).send(error);
        })
    },
    patch: function(req, res) {
        userService.patch(req).then(function(data) {
            res.status(200).send(data)
        }, function(error) {
            res.status(400).send(error);
        })
    },
    delete: function(req, res) {
        userService.delete(req).then(function(data) {
            res.status(200).send(data)
        }, function(error) {
            res.status(400).send(error);
        })
    },
};