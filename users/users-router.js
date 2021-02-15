const router = require('express').Router();

const Users = require('../model.js');
const restricted = require('../middleware/restricted-middleware.js');

// WORKING //
router.get('/', restricted, (req, res) => {
  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});

module.exports = router;