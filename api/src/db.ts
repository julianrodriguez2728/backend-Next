// const { Sequelize } = require('sequelize-typescript')
// const config = require('./lib/config')
import config from "./lib/config";
import { Sequelize } from "sequelize-typescript";

export const sequelize = new Sequelize({
  dialect: 'postgres',
  database: config.dbName,
  password: config.dbPassword,
  username: config.dbUser,
  models: [__dirname + '/lib/database/models'],
});
