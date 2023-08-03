// st { Sequelize } = require('sequelize-typescript')
// const config = require('./lib/config')
import config from "./lib/config";
import { Sequelize } from "sequelize-typescript";
import { User } from "./lib/database/models/User";
import { Product } from "./lib/database/models/Product";

//! USO LOCAL
export const sequelize = new Sequelize({
  dialect: 'postgres',
  database: config.dbName,
  password: config.dbPassword,
  username: config.dbUser,
  models: [User, Product],
});

//! DEPLOY RENDER

const { Pool } = require('pg')
 
const pool = new Pool({
  connectionString: process.env.POSTGRES_URL + "?sslmode=require",
})

pool.connect((error: any) => {
    if (error) throw error
    console.log("Connect to PostgreSQL successfully!")
})

module.exports = pool
