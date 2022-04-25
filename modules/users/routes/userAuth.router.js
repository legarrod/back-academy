const express = require('express');
const passport = require('passport');
const { development } = require('../../../db/config');
const jwt = require('jsonwebtoken');
const { models } = require('./../../../libs/sequelize');
const router = express.Router();

router.post(
  '/',
  passport.authenticate('local', { session: false }),
  async (req, res, next) => {
    try {
      const user = req.user;
      const payload = {
        sub: user.id,
        role: user.role,
      };
      const { email, password } = req?.body;
      const token = jwt.sign(payload, development.secret);
      const userName = user.full_name;
      const userAfiliateId = user.afiliateid;
      const id = user.id;
      const myId = { id: id };
      const resultMyData = await models.User.findAll({
        where: myId,
      });
      const { sponsor } = resultMyData[0];

      const result = await models.User.findAll({
        where: { afiliateid: sponsor },
      });

      const {
        full_name: sponsorName,
        bankAcount: sponsorBanck,
        cellphone: sponsorPhone,
      } = result[0];

      res.json({
        id,
        userName,
        userAfiliateId,
        token,
        sponsorName,
        sponsorBanck,
        sponsorPhone,
      });
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
