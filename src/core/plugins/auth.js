'use strict';

//const jsonWebToken = require('jsonwebtoken');

module.exports = {
  register: async (server) => {
    await server.register(require('hapi-auth-jwt2'));

    const validate = async function (decoded, request) {
      if(decoded.id) return {isValid: true};
      return { isValid: false }; 	
    };

    server.auth.strategy('jwt', 'jwt', {
      key: 'JWT',
      validate: validate,
      verifyOptions: {
        algorithms: ['HS256']
      }
    });
  },
  name: 'auth',
  version: '1.0.0'
};