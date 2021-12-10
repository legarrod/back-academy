const boom = require('@hapi/boom');
const { userExist } = require('../../../utils/utils');
const { db } = require('../models/model.register');
const customers = db.customers;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = async (req, res, next) => {
  const { full_name, identification_number } = req.body;

  if (!full_name) {
    next(boom.notFound('NAME_REQUIRED'));
  }
  const condition = {
    identification_number: identification_number,
  };
  const userExists =
    identification_number !== ''
      ? await userExist(customers, condition, next)
      : false;
  if (userExists) {
    res.send({
      message: `CUSTOMER_ALREADY_EXISTS`,
      identification: identification_number,
    });
  } else {
    try {
      const result = await customers.create(req.body);
      res.send({
        message: `SUCCESSFULLY_CREATE`,
        customer: result?.full_name,
      });
    } catch (error) {
      res.status(500).send({
        message:
          error.message ||
          'Some error occurred while creating the vehicle entry.',
      });
    }
  }
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {};

// Find a single Tutorial with an id
exports.findOne = async (req, res, next) => {
  const { identification_number } = req.body;
  var condition = identification_number
    ? { identification_number: identification_number }
    : null;
  const data = await customers.findAll({ where: condition });
  try {
    if (data?.length > 0) {
      res.send(data);
    } else {
      next(boom.notFound('USER_DOES_NOT_EXIST'));
    }
  } catch (error) {
    next(error);
  }
};

// Update a Tutorial by the id in the request
exports.update = async (req, res, next) => {
  const { identification_number, full_name, address, email, cellphone } =
    req.body;
  const dataUpdate = {
    full_name: full_name,
    address: address,
    email: email,
    cellphone: cellphone,
  };
  const result = await customers.update(dataUpdate, {
    where: { identification_number: identification_number },
  });
  const condition = { identification_number: identification_number };
  const userExists = await userExist(condition, next);
  if (userExists) {
    try {
      if (result[0] === 1 || result[0] === 3) {
        res.send({
          message: 'Vahicle entry successfully',
        });
      } else {
        res.send({
          message: `Cannot update employee with identification number = ${identification_number}. Maybe employe was not found or is already updated!`,
        });
      }
    } catch (error) {
      res.status(500).send({
        message:
          'Error updating employee whith identification number = ' +
          identification_number,
        error: error,
      });
    }
  } else {
    next(boom.notFound('USER_DOES_NOT_EXIST'));
  }
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {};

// Find all published Tutorials
exports.findAllPublished = async (req, res, next) => {
  try {
    const { identification } = req.query;
    var condition = identification
      ? { identification_number: identification }
      : null;
    const result = await customers.findAll({ where: condition });
    res.send(result);
  } catch (error) {
    next(error);
  }
};
