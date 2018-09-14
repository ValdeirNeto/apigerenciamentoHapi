'use strict';

const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define('Usuario', {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    nome: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    senha: {
      type: DataTypes.VIRTUAL,
      set: function (val) {
        this.salt = bcrypt.genSaltSync(12);
        this.setDataValue('senha', val);
        this.setDataValue('senha_hash', this.criptografarSenha(val));
      }
    },
    senha_hash: {
      type: DataTypes.STRING,
      allowNull: false
    },
    salt: {
      type: DataTypes.VIRTUAL
    }
  },{
    tableName: 'usuarios',
    freezeTableName: true,
    createdAt: 'data_cadastro',
    updatedAt: 'data_atualizacao',
    schema: 'public',
  });

  Usuario.prototype.checarSenha = function (senha) {
    //return (this.criptografarSenha(senha) === this.senha_hash);
    return bcrypt.compareSync(senha, this.senha_hash);
  };

  Usuario.prototype.criptografarSenha = function (senha) {
    return bcrypt.hashSync(senha, this.salt);
  };

  return Usuario;
};