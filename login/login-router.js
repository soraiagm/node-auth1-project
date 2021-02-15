const bc = require('bcryptjs');
const router = require('express').Router();

const Users = require('../model.js'); 

// WORKING //
router.post('/', (req, res) => {
    let { username, password } = req.body;
  
    Users.findBy({ username })
      .first()
      .then(user => {
        if (user && bc.compareSync(password, user.password)) {
          // req.session.username = user.username; OR //
          req.session.loggedIn = true;
          // req.session.userId = user.id;
          
          res.status(200).json({ 
              message: `Welcome ${user.username}!` });
        } else {
          res.status(401).json({ 
              message: 'Invalid Credentials' });
        }
      })
      .catch(error => {
        res.status(500).json(error);
      });
  });

module.exports = router;