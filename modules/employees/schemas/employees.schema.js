const Joi = require('joi');

const id = Joi.string().uuid();
const identification_number = Joi.string().min(3).max(11);
const document_type = Joi.string();
const full_name = Joi.string();
const address = Joi.string();
const email = Joi.string();
const cellphone = Joi.string();
const creation_date = Joi.string();

const createProductSchema = Joi.object({
  id: id.allow(''),
  document_type: identification_number.required(),
  identification_number: document_type,
  full_name: full_name.required(),
  address: address,
  email: email,
  cellphone: cellphone,
  creation_date: creation_date,
});

const updateProductSchema = Joi.object({
  identification_number: identification_number,
  document_type: document_type,
});

const getProductSchema = Joi.object({
  id: id.required(),
});

module.exports = { createProductSchema, updateProductSchema, getProductSchema };
