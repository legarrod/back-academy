const Joi = require('joi');

const id = Joi.string().uuid();
const sku = Joi.string().min(3).max(11);
const nameProduct = Joi.string();
const photoLink = Joi.string();
const descriptionProd = Joi.string();
const creationDate = Joi.string();
const stateProducts = Joi.string();

const createProductSchema = Joi.object({
  //   id: id.allow(''),
  sku: sku.required(),
  name_product: nameProduct.required(),
  photo_link: photoLink.allow(''),
  descriptionProd: descriptionProd.allow(''),
  creation_date: creationDate.allow(''),
  state_products: stateProducts,
});

const updateProductSchema = Joi.object({
  sku: sku.required(),
  name_product: nameProduct.required(),
  photo_link: photoLink,
  descriptionProd: descriptionProd,
  state_products: stateProducts,
});

const getProductSchema = Joi.object({
  name_product: nameProduct.required(),
});

module.exports = { createProductSchema, updateProductSchema, getProductSchema };
