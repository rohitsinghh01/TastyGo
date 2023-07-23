const router = require('express').Router();
const User = require('../models/user');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.post(
  '/createuser',
  [
    body('email').isEmail(),
    body('name').isLength({ min: 5 }),
    body('password', 'Length must be greater than 5').isLength({ min: 5 }),
  ],

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const salt = await bcrypt.genSalt(10);
    const secPassword = await bcrypt.hash(req.body.password, salt);

    try {
      await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPassword,
        location: req.body.location,
      }).then(res.status(201).json({ success: true }));
    } catch (error) {
      console.log(error);
      res.status(404).json({ success: false });
    }
  }
);

router.post(
  '/loginuser',
  [
    body('email', 'Invalid Credentials').isEmail(),
    body('password', 'Invalid Credentials').isLength({ min: 5 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    let useremail = req.body.email;
    try {
      const userData = await User.findOne({ email: useremail });
      if (!userData) {
        return res.status(400).json({ errors: 'Invalid Credentials' });
      }
      const isMatch = await bcrypt.compare(
        req.body.password,
        userData.password
      );
      if (!isMatch) {
        return res.status(400).json({ errors: 'Invalid Credentials' });
      }

      const data = {
        user: {
          id: userData.id,
        },
      };

      const authToken = jwt.sign(data, process.env.SECRET_KEY);

      // res.cookie('jwt', authToken, {
      //   httpOnly: true,
      //   sameSite: 'None',
      // });


      return res.status(200).json({ success: true,authToken:authToken });
    } catch (error) {
      console.log(error);
      res.status(404).json({ success: false });
    }
  }
);

module.exports = router;
