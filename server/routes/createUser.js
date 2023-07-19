const router = require('express').Router();
const User = require('../models/user');

router.post('/createuser', async (req, res) => {
  try {
    await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      location: req.body.location,
    });

    res.status(201).json({ success: true });


  } catch (error) {
    console.log(error);
    res.status(404).json({ success: false });
  }
});

module.exports = router;
