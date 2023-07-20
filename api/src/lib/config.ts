import dotenv from 'dotenv';
import { $GetType } from 'sequelize-typescript';
dotenv.config();

const config = {
  dbUser: process.env.DB_USER || 'mrguiso',
  dbName: process.env.DB_NAME || 'gaming',
  dbPassword: process.env.DB_PASSWORD || '602223Lucas.',
  dbHost: process.env.DB_HOST || 'localhost',
  dbPort: process.env.DB_PORT || '3001',
};

export default config;
