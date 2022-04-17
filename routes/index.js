const usersroutes = require('../modules/users/routes/users.router');
const express = require('express');
const authRouter = require('../modules/users/routes/userAuth.router');

function routerApi(app) {
  const baseRoute = express.Router();
  app.use('/api/v1', baseRoute);
  baseRoute.use('/users', usersroutes);
  baseRoute.use('/login', authRouter);
}

module.exports = routerApi;
