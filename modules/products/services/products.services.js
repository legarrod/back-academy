const boom = require('@hapi/boom');
const { userExist } = require('../../../utils/utils');
const { db } = require('../models/model.register');
const products = db.products;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = async (req, res, next) => {
  const creation = new Date();
  const imageDefault = 'https://crmsystem.tech/img/not-image.png';
  const { sku, name_product, photo_link, descriptionProd, state_products } =
    req.body;
  const dataSave = {
    id: '',
    sku: sku,
    name_product: name_product,
    photo_link: photo_link || imageDefault,
    descriptionProd: descriptionProd,
    creation_date: creation,
    state_products: state_products,
  };
  try {
    const result = await products.create(dataSave);
    if (result) {
      res.send({
        message: `SUCCESSFULLY_CREATED`,
      });
    }
  } catch (error) {
    res.status(500).send({
      message:
        error.message || 'Some error occurred while creating the products.',
    });
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
  const data = await products.findAll({ where: condition });
  try {
    if (data?.length > 0) {
      res.send(data);
    } else {
      next(boom.notFound('PRODUCT_DOES_NOT_EXIST'));
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
  const result = await products.update(dataUpdate, {
    where: { identification_number: identification_number },
  });
  const condition = { identification_number: identification_number };
  const userExists = await userExist(employees, condition, next);

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
    const { name, offset, limit } = req.query;
    var condition = name ? { name_product: name } : null;
    const options = { where: condition, offset: 0, limit: 5 };
    if (offset && limit) {
      options.limit = parseInt(limit);
      options.offset = parseInt(offset);
    }
    const result = await products.findAll(options);
    res.send(result);
  } catch (error) {
    next(error);
  }
};
