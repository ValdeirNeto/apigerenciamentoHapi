'use strict';

const Controller = require('./autenticacao.public.controller');
const Validator = require('./autenticacao.public.validation');

module.exports = {
  register: async (server) => {
    server.route([
      {
        method: 'POST',
        path: '/auth',
        config: {
          auth: false,
          handler: Controller.auth,
          validate: Validator.auth()
        },
      },
    ]
    );
  },
  name: 'autenticacao-public-route',
  version: '1.0.0'
};