'use strict';

//const Joi = require('joi');
const Schema = require('../usuario.schema');

const schema = Schema.getSchema();


const get = () => ({
  params: {
    id: schema.id.required()
  }
});

module.exports = {
  get
};