const express = require('express');
const app = express();
const router = express.Router();
const process = require('process');
const env = process.env.NODE_ENV || 'local';
const configs = require('./config/' + env + '.json');
const serverConfig = require('./services/server-configuration-service');
const logger = require('./services/loger-service');
const addRequestId = require('express-request-id')();

app.use(addRequestId);
app.use(serverConfig);

require('./services/user-service/routes.js')(app, router);

app.use('/api', router);
const port = (env != 'local' && env != 'development') ? configs.port : configs.devPorts[process.env.USER];

app.listen(port, function() {
    // console.log('Process ID:' + process.pid + ' => Server started on port: ' + port);
    logger.info('Process ID:' + process.pid + ' => Server started on port: ' + port);
});