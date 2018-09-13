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
          description: 'Listando o Usuario',
          notes: 'retorna a lista de usuario',
          tags: ['api'],
          handler: Controller.get,
          validate: Validator.get()
        },
      },
      {
        method: 'POST',
        path: '/usuario',
        config: {
          description: 'Criando o Usuario',
          notes: 'Criando o usuario',
          tags: ['api'],
          handler: Controller.create,
          validate: Validator.create()
        }
      },
      {
        method: ['PUT', 'PATCH'],
        path: '/usuario/{id}',
        config: {
          description: 'Atualiza o Usuario',
          notes: 'Atualiza o usuario',
          tags: ['api'],
          handler: Controller.update,
          validate: Validator.update()
        }
      },
      {
        method: 'DELETE',
        path: '/usuario/{id}',
        config: {
          description: 'Deletando o Usuario',
          notes: 'deletendo de usuario',
          tags: ['api'],
          handler: Controller.remove,
          validate: Validator.get()
        },
      }, 
    ]
    );
  },
  name: 'usuario-public-route',
  version: '1.0.0'
};