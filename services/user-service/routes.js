const userController = require('./controllers/userController');
const bodyParser = require('body-parser');

module.exports = function(app, router) {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: false
    }));

    router.post('/user/post', userController.post);
    router.get('/user/get', userController.get);
    router.post('/user/put', userController.put);
    router.post('/user/patch', userController.patch);
    router.post('/user/delete', userController.delete);

};