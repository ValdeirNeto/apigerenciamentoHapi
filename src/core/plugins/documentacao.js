'use strict';

const Inert = require('inert');
const Vision = require('vision');
const HapiSwagger = require('hapi-swagger');
const Pack = require('./../../../package');

module.exports = {
  register: async (server) => {
    const swaggerOptions = {
      schemes: ['http'],
      host: 'localhost:3000',
      info: {
        title: 'Hapi Api',
        version: Pack.version,
      },
      swaggerUIPath: '/v1/',
      jsonPath: '/v1/swagger.json',
      documentationPath: '/v1/docs'
    };

    await server.register([
      Inert,
      Vision,
      {
        plugin: HapiSwagger,
        options: swaggerOptions
      }
    ]);
  },
  name: 'documentation',
  version: '1.0.0'
};