const Joi = require('joi');

const id = Joi.string().uuid();
const identification_number = Joi.string().min(3).max(11);
const document_type = Joi.string();
const full_name = Joi.string();
const address = Joi.string();
const role = Joi.string();
const afiliateid = Joi.string();
const email = Joi.string();
const password = Joi.string();
const sponsor = Joi.string();
const cellphone = Joi.string();
const active = Joi.boolean();
const creation_date = Joi.string();
const date_activation = Joi.string();
const referencedby = Joi.string();
const bankAcount = Joi.string();
const refererId = Joi.string();

const createUsersSchema = Joi.object({
  full_name: full_name.required(),
  sponsor: sponsor.allow(''),
  referencedby: referencedby.allow(''),
  role: role.allow(''),
  afiliateid: afiliateid,
  email: email,
  password: password,
  afiliateid: afiliateid.allow(''),
});

const updateUsersSchema = Joi.object({
  document_type: document_type.allow(''),
  identification_number: identification_number.allow(''),
  full_name: full_name.allow(''),
  afiliateid: afiliateid.allow(''),
  address: address.allow(''),
  email: email.allow(''),
  active: active.allow(''),
  date_activation: date_activation.allow(''),
  bankAcount: bankAcount.allow(''),
  password: password.allow(''),
  cellphone: cellphone.allow(''),
  role: role.allow(''),
});

const getUsersSchema = Joi.object({
  id: id.required(),
});

const getUserEmailSchema = Joi.object({
  email: email,
  password: password,
});

module.exports = {
  createUsersSchema,
  updateUsersSchema,
  getUsersSchema,
  getUserEmailSchema,
};
