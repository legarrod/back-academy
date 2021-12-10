const express = require('express');
const employees = require('../services/employes.services');
const validatorHandler = require('../../../middlewares/validator.handler');
const { createProductSchema } = require('../schemas/employees.schema');
const router = express.Router();

router.get('/', employees.findAllPublished);

router.post(
  '/',
  validatorHandler(createProductSchema, 'body'),
  employees.create
);

router.patch('/', employees.update);

module.exports = router;
