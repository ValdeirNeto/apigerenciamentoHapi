'use strict';


module.exports = (sequelize, DataTypes) => {
  const Veiculo = sequelize.define('Veiculo', {
    idVeiculo: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    marca: DataTypes.STRING,
    modelo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    placa: {
      type: DataTypes.STRING,
      allowNull: false
    },
  },{
    tableName: 'veiculos',
    freezeTableName: true,
    createdAt: 'data_cadastro',
    updatedAt: 'data_atualizacao',
    // schema: 'public',
  });

  return Veiculo;
};