const router = require('express').Router();

const Users = require('../model.js');

// WORKING //
router.get('/', (req, res) => {
  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});

module.exports = router;