const bc = require('bcryptjs');
const router = require('express').Router();

const Users = require('../model.js'); 

router.post('/', (req, res) => {
    let { username, password } = req.body;
  
    Users.findBy({ username })
      .first()
      .then(user => {
        if (user && bc.compareSync(password, user.password)) {
          // check the password is valid
          res.status(200).json({ message: `Welcome ${user.username}!` });
        } else {
          res.status(401).json({ message: 'Invalid Credentials' });
        }
      })
      .catch(error => {
        res.status(500).json(error);
      });
  });

module.exports = router;