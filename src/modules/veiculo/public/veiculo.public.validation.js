'use strict';

const Joi = require('joi');
const Schema = require('../veiculo.schema');

const schema = Schema.getSchema();

const create = () => ({
  payload: Joi.object({
    marca: schema.marca.required(),
    modelo: schema.modelo.required(),
    placa: schema.placa.required(),
  }).label('CadastroVeiculo')
});

const update = () => ({
  params: {
    idVeiculo: schema.id.required()
  },
  payload: Joi.object({
    marca: schema.marca.optional(),
    modelo: schema.modelo.optional(),
    placa: schema.placa.optional()
  }).label('UpdateVeiculo')
});

const get = () => ({
  params: {
    idVeiculo: schema.id.required()
  }
});
module.exports = {
  create,
  update,
  get
};