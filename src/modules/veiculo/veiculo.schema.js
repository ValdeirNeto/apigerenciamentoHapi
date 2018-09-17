'use strict';

const Joi = require('joi');

const schema = {
  idVeiculo: Joi.number().integer().min(0),
  marca: Joi.string().trim(),
  modelo: Joi.string().email().min(0).max(255),
  placa: Joi.string().trim(),
  data_cadastro: Joi.date().iso(),
  data_atualizacao: Joi.date().iso()
};

const getSchema = () => ( schema );

module.exports = {
  getSchema
};