'use strict';

const Controller = require('./veiculo.public.controller');
const Validator = require('./veiculo.public.validation');

module.exports = {
  register: async (server) => {
    server.route([
      {
        method: 'GET',
        path: '/veiculo',
        config: {
          auth: false,
          description: 'Listando o veiculo',
          notes: 'retorna a lista de veiculo',
          tags: ['api'],
          handler: Controller.list
        },
      },
      {
        method: 'GET',
        path: '/veiculo/{id}',
        config: {
          auth: {
            scope: ['public']
          },
          description: 'Listando o veiculo',
          notes: 'retorna a lista de veiculo',
          tags: ['api'],
          handler: Controller.get,
          validate: Validator.get()
        },
      },
      {
        method: 'POST',
        path: '/veiculo',
        config: {
          auth: false,
          description: 'Criando o veiculo',
          notes: 'Criando o veiculo',
          tags: ['api'],
          handler: Controller.create,
          validate: Validator.create()
        }
      },
      {
        method: ['PUT', 'PATCH'],
        path: '/veiculo/{id}',
        config: {
          auth: {
            scope: ['public']
          },
          description: 'Atualiza o veiculo',
          notes: 'Atualiza o veiculo',
          tags: ['api'],
          handler: Controller.update,
          validate: Validator.update()
        }
      },
      {
        method: 'DELETE',
        path: '/veiculo/{id}',
        config: {
          auth: {
            scope: ['public']
          },
          description: 'Deletando o veiculo',
          notes: 'deletendo de veiculo',
          tags: ['api'],
          handler: Controller.remove,
          validate: Validator.get()
        },
      }, 
    ]
    );
  },
  name: 'veiculo-public-route',
  version: '1.0.0'
};