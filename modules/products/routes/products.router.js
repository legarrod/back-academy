const express = require('express');
const products = require('../services/products.services');
const { validatorHandler } = require('../../../middlewares/validator.handler');
const { createProductSchema } = require('./../schemas/products.schema');
const router = express.Router();

router.get('/', products.findAllPublished);

router.post(
  '/',
  validatorHandler(createProductSchema, 'body'),
  products.create
);

// router.patch('/', employees.update);

module.exports = router;
