const bc = require('bcryptjs');
const router = require('express').Router();

const Users = require('../model.js'); 

// WORKING //
router.get('/secret', (req, res, next) => {
    if(req.headers.authorization) {
      bc.hash(req.headers.authorization, 8, (err, hash) => { // 10 is the number of rounds
        if(err) {
          res.status(500).json({ oops: "it broke"})
        } else {
          res.status(200).json({ hash })
        }
      })
    } else {
      res.status(400).json({error: 'missing header'})
    }
  });


  // WORKING //
router.post('/', (req, res) => {
    let user = req.body;
  
    const hash = bc.hashSync(req.body.password, 8);
  
    user.password = hash;
  
    // hash password before saving the user
    Users.add(user)
      .then(saved => {
        res.status(201).json(saved);
      })
      .catch(error => {
        res.status(500).json(error);
      });
  });
  
  module.exports = router;