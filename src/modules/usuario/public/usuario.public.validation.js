'use strict';

const Joi = require('joi');
const Schema = require('../usuario.schema');

const schema = Schema.getSchema();

const create = () => ({
  payload: Joi.object({
    nome: schema.nome.required(),
    email: schema.email.required(),
    senha: schema.senha.required(),
  }).label('CadastroUsuario')
});

const update = () => ({
  params: {
    id: schema.id.required()
  },
  payload: Joi.object({
    nome: schema.nome.optional(),
    senha: schema.senha.optional()
  }).label('UpdateUsuario')
});

const get = () => ({
  params: {
    id: schema.id.required()
  }
});
module.exports = {
  create,
  update,
  get
};