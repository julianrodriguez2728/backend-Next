import express, { Application } from 'express';
const { sequelize } = require('./api/src/db');
import { log } from 'console';
import app from './api/src/app';

sequelize
  .sync({ alter: true, logging: false })
  .then(() =>
    app.listen(3001, function () {
      log('Listening on Port: 3001');
    })
  )
  .catch((error: Error) => log(error.message, error.name));
