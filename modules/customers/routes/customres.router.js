const express = require('express');
const customers = require('../services/customers.services');
const validatorHandler = require('../../../middlewares/validator.handler');
const { createCustomerSchema } = require('../schemas/customer.schema');
const router = express.Router();

router.get('/', customers.findAllPublished);

router.post(
  '/',
  validatorHandler(createCustomerSchema, 'body'),
  customers.create
);

router.patch('/', customers.update);

module.exports = router;
