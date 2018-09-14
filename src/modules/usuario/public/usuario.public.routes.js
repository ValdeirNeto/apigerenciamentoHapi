'use strict';

const Controller = require('./usuario.public.controller');
const Validator = require('./usuario.public.validation');

module.exports = {
  register: async (server) => {
    server.route([
      {
        method: 'GET',
        path: '/usuario',
        config: {
          auth: {
            scope: ['public']
          },
          description: 'Listando o Usuario',
          notes: 'retorna a lista de usuario',
          tags: ['api'],
          handler: Controller.list
        },
      },
      {
        method: 'GET',
        path: '/usuario/{id}',
        config: {
          auth: {
            scope: ['public']
          },
          description: 'Listando o Usuario',
          notes: 'retorna a lista de usuario',
          tags: ['api'],
          handler: Controller.get,
          validate: Validator.get()
        },
      }, 
    ]
    );
  },
  name: 'usuario-public-route',
  version: '1.0.0'
};