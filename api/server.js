const express = require('express');

const registerRouter = require('../register/register-router.js');
const loginRouter = require('../login/login-router.js');
const usersRouter = require('../users/users-router.js');

const Middleware = require('./middleware.js');

const server = express();
Middleware(server);

server.use('/api/register', registerRouter);
server.use('/api/login', loginRouter);
server.use('/api/users', usersRouter);


server.get('/', (req, res) => {
    res.json({ api: "It's working" });
  });


module.exports = server;