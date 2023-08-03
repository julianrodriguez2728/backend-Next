// st { Sequelize } = require('sequelize-typescript')
// const config = require('./lib/config')
import config from "./lib/config";
import { Sequelize } from "sequelize-typescript";
import { User } from "./lib/database/models/User";
import { Product } from "./lib/database/models/Product";

import pg from 'pg';


const { Pool } = pg;


const pool = new Pool({

  connectionString: process.env.POSTGRES_URL + "?sslmode=require",

})

// export const sequelize = new Sequelize({
//   dialect: 'postgres',
//   database: config.dbName,
//   password: config.dbPassword,
//   username: config.dbUser,
//   models: [User, Product],
// });

module.exports = pool