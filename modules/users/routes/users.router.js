const express = require('express');
const users = require('../services/users.services');
const { validatorHandler } = require('../../../middlewares/validator.handler');
const passport = require('passport');

const {
  createUsersSchema,
  updateUsersSchema,
  getUsersSchema,
} = require('../schemas/users.schema');
const router = express.Router();

router.get('/', users.findByEmail);
router.get(
  '/all-admin',
  passport.authenticate('jwt', { session: false }),
  users.findAllAdmin
);

router.get(
  '/list-referer-by-user/:sponsor',
  passport.authenticate('jwt', { session: false }),
  users.findBySponsor
);

router.post('/', validatorHandler(createUsersSchema, 'body'), users.create);

router.patch(
  '/activate/:id',
  passport.authenticate('jwt', { session: false }),
  validatorHandler(getUsersSchema, 'params'),
  validatorHandler(updateUsersSchema, 'body'),
  users.activation
);
router.patch(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  validatorHandler(getUsersSchema, 'params'),
  validatorHandler(updateUsersSchema, 'body'),
  users.update
);
router.get('/:id', users.findOne);

module.exports = router;
