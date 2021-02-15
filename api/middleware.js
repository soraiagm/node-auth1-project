const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const session = require('express-session');

const sessionConfig = {
  name: 'cookieMonster',
    secret: process.env.SESSION_SECRET || "keep it secret, keep it safe!", // used for cookie encryption
    cookie: {
      maxAge: 1000 * 60 * 10, // 10 minutes in ms
      secure: false, // set to true in production, only send cookies over HTTPS
      httpOnly: true, // JS cannot access the cookies on the browser
    },
      resave: false,
      saveUninitialized: true, // read about it for GDPR compliance
};

module.exports = server => {
  server.use(helmet());
  server.use(express.json());
  server.use(cors());
  server.use(session(sessionConfig)); // turn on sessions
};