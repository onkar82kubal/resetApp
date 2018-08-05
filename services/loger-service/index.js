const winston = require('winston');
const moment = require('moment');
const filename = new Date().toJSON().slice(0, 10).replace(/-/g, '');
const path = require('path');
const fs = require('fs');
const logDir = 'logs';
if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir);
}

const logger = winston.createLogger({
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({
            filename: path.join(logDir, filename + '-error.log'),
            level: 'error'
        }),
        new winston.transports.File({
            filename: path.join(logDir, filename + '-info.log'),
            level: 'info'
        })
    ],
    format: winston.format.combine(
        winston.format.colorize({
            all: true
        }),
        winston.format.timestamp({
            format: moment().utc().format('DD/MM/YYYY hh:mm:ss')
        }),
        winston.format.simple()
    )
});

module.exports = logger;