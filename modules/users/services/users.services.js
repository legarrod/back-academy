const boom = require('@hapi/boom');
const { userExist } = require('../../../utils/utils');
const { db } = require('../models/model.register');
const { models } = require('./../../../libs/sequelize');
const User = db.User;
const Op = db.Sequelize.Op;
const bcrypt = require('bcrypt');

// Create and Save a new Tutorial
exports.create = async (req, res, next) => {
  const passwordHashed = await bcrypt.hash(req?.body?.password, 10);
  const body = {
    full_name: req?.body?.full_name,
    sponsor: req?.body?.sponsor,
    email: req?.body?.email,
    password: passwordHashed,
    afiliateid: req?.body?.afiliateid
      ? req?.body?.afiliateid
      : 'tdc-' + Math.round(Math.random() * (1000 - 100 + 1)) + 100,
  };

  try {
    const result = await models.User.create(body);
    delete result.dataValues.password;
    res.send(result);
  } catch (error) {
    next(error);
  }
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {};

exports.findAllAdmin = async (req, res) => {
  try {
    const result = await models.User.findAll();
    res.send(result);
  } catch (error) {
    next(error);
  }
};

exports.findBySponsor = async (req, res) => {
  const { sponsor } = req.params;

  try {
    const result = await models.User.findAll({
      where: {
        sponsor: sponsor,
      },
    });
    // {
    //   id: result.id,
    //   full_name: result.full_name,
    //   email: result.email,
    //   isActive: result.active,
    // }
    if (result) {
      res.send(result);
    } else {
      next(boom.notFound('YOU_HAVE_NO_REFERRALS'));
    }
  } catch (error) {
    next(error);
  }
};

// Find a single Tutorial with an id
exports.findOne = async (req, res, next) => {
  const { id } = req.params;
  const data = await models.User.findByPk(id);
  try {
    if (data) {
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
  const { id } = req?.params;
  const body = req?.body;
  if (body.password) {
    const passwordHashed = await bcrypt.hash(body.password, 10);
    const newData = {
      ...body,
      password: passwordHashed,
    };
    const user = await models.User.findByPk(id);
    if (user) {
      try {
        const condition = { id: id };
        const result = await user.update(newData, condition);
        res.send(result);
      } catch (error) {
        next(error);
      }
    } else {
      next(boom.notFound('USER_DOES_NOT_EXIST'));
    }
  } else {
    const user = await models.User.findByPk(id);
    if (user) {
      try {
        const condition = { id: id };
        const result = await user.update(body, condition);
        res.send(result);
      } catch (error) {
        next(error);
      }
    } else {
      next(boom.notFound('USER_DOES_NOT_EXIST'));
    }
  }
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {};

exports.findByEmailStrategi = async (email) => {
  const rta = await models.User.findOne({
    where: { email },
  });
  return rta;
};

// Find all published Tutorials
exports.findByEmail = async (req, res, next) => {
  //http://localhost:3000/api/v1/user?plate=BCB14B
  //http://localhost:3000/api/v1/user
  const { email, password } = req?.body;

  if (email && password) {
    try {
      const emailFind = { email: email };
      const result = await models.User.findAll({
        where: emailFind,
      });
      const passwordHashed = await bcrypt.compare(
        password,
        result[0]?.password
      );
      if (!passwordHashed) {
        return next(boom.notFound('INCORRECT_PASSWORD'));
      }
      res.send(result);
    } catch (error) {
      // next(boom.notFound('USER_DOES_NOT_EXIST'));
      next(error);
    }
  } else {
    next(boom.notFound('ALL_INFORMATION_REQUERID'));
  }
};
