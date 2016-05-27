'use strict';

var Types = require('joi');

module.exports = function (server) {
    const 
        harvesterPlugin = server.plugins['hapi-harvester'],
        schema = {
            type: 'notes',
            attributes: {
                text: Types.string()
            }
        }

    harvesterPlugin.routes.all(schema).forEach(function (route) {
        server.route(route)
    })
}
