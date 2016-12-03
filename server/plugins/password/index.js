'use strict';

exports.register = (server, options, next) => {
  server.route({
    method: 'GET',
    path: '/password',
    handler: (request, reply) => {
      const password =
        Math.random().toString(36).substr(7, 4) + 
        ' ' + 
        Math.random().toString(36).substr(7, 4);
      reply(null, JSON.stringify({password: password}));
    }
  });
  next();
};

exports.register.attributes = {
  name: 'getPassword',
  version: '1.0.0'
}
