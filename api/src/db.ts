// st { Sequelize } = require('sequelize-typescript')
// const config = require('./lib/config')
import config from "./lib/config";
import { Sequelize } from "sequelize-typescript";
import { User } from "./lib/database/models/User";
import { Product } from "./lib/database/models/Product";



export const sequelize = new Sequelize({
  dialect: 'postgres',
  database: config.dbName,
  password: config.dbPassword,
  username: config.dbUser,
  models: [User, Product],
});

