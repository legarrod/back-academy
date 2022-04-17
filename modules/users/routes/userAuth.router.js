const express = require('express');
const passport = require('passport');
const { development } = require('../../../db/config');
const jwt = require('jsonwebtoken');
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
      const token = jwt.sign(payload, development.secret);
      const userName = user.full_name;
      res.json({ userName, token });
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
