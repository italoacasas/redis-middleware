'use strict';

const redis = require('redis');

module.exports = (port, host, options) => {

    port = port || 6379;
    host = host || 'localhost';
    options = options || {};

    let client = redis.createClient(port, host, options);

    let db = (req, res, next) => {
        if (db.connect) {
            req.client = client;
            next();
        } else {
            client.on('ready', () => {
                req.client = client;
                next();
            });
        }
    };

    db.client = client;

    db.connect = next => {
        if (client && client.connected) {
            client.once('end', function () {
                client = redis.createClient(port, host, options);
                next();
            });

            client.quit();
        } else {
            client = redis.createClient(port, host, options);
            next();
        }
    };

    db.disconnect = next => {
        if (client) {
            client.once('end', () => {
                client = null;
                next();
            });

            client.quit();
        } else {
            next();
        }
    };

    return db;
};
