const router = require('express').Router();
const User = require('../models/user');
const { body, validationResult } = require('express-validator');

router.post(
  '/createuser',
  [
    body('email').isEmail(),
    body('name').isLength({ min: 5 }),
    body('password','Length must be greater than 5').isLength({ min: 5 }),
  ],

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        location: req.body.location,
      }).then(res.status(201).json({ success: true }));
    } catch (error) {
      console.log(error);
      res.status(404).json({ success: false });
    }
  }
);

module.exports = router;
