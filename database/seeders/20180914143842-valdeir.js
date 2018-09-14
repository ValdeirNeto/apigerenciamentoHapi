'use strict';

const _email = 'vdasilvaneto@gmail.com';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const model = queryInterface.sequelize.import('../../src/models/usuario.models');
    const usuario = new model({
      nome: 'Valdeir da Silva Neto',
      email: _email,
      senha: 'skatsk80',
      data_cadastro: new Date(),
      data_atualizacao: new Date()
    });

    queryInterface.bulkInsert('usuarios', [{
      nome: usuario.nome,
      email: usuario.email,
      senha_hash: usuario.senha_hash,
      data_cadastro: usuario.data_cadastro,
      data_atualizacao: usuario.data_atualizacao
    }], {} );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('usuarios', { email: _email });
  }
};
