'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('usuarios', {
      id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      nome: Sequelize.STRING,
      email: {
        type: Sequelize.STRING,
        allowNull: false
      },
      senha_hash: {
        type: Sequelize.STRING,
        allowNull: false
      },
      data_cadastro: {
        type: Sequelize.DATE,
        allowNull: null
      },
      data_atualizacao: {
        type: Sequelize.DATE,
        allowNull: null,
      }
    });
    
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.dropTable('usuarios');
  }
};
