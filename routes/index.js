const employeesRouter = require('../modules/employees/routes/employes.router');
const customers = require('../modules/customers/routes/customres.router');
const products = require('../modules/products/routes/products.router');
const express = require('express');

function routerApi(app) {
  const baseRoute = express.Router();
  app.use('/api/v1', baseRoute);
  baseRoute.use('/employees', employeesRouter);
  baseRoute.use('/customers', customers);
  baseRoute.use('/products', products);
}

module.exports = routerApi;
