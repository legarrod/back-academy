const Joi = require('joi');

const id = Joi.string().uuid();
const document_type = Joi.string().min(2).max(4);
const customer_type = Joi.string().min(4).max(6);
const identification_number = Joi.string();
const full_name = Joi.string();
const address_customer = Joi.string();
const email = Joi.string();
const cellphone = Joi.string();
const creation_date = Joi.string();
const state_customer = Joi.string();
const last_call = Joi.string();
const recurrence = Joi.string();

const createCustomerSchema = Joi.object({
  id: id.allow(''),
  document_type: document_type.required(),
  customer_type: customer_type.required(),
  identification_number: identification_number.allow(''),
  full_name: full_name.required(),
  address_customer: address_customer.allow(''),
  email: email.allow(''),
  cellphone: cellphone.allow(''),
  creation_date: creation_date.allow(''),
  state_customer: state_customer.required(),
  last_call: last_call.allow('').default(creation_date),
  recurrence: recurrence.allow('').default(10),
});

const updateCustomerSchema = Joi.object({
  identification_number: identification_number,
  document_type: document_type,
});

const getCustomerSchema = Joi.object({
  id: id.required(),
});

module.exports = {
  createCustomerSchema,
  updateCustomerSchema,
  getCustomerSchema,
};
