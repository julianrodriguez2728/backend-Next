import dotenv from 'dotenv';
dotenv.config();

const config = {
  dbUser: process.env.DB_USER || 'postgres',
  dbName: process.env.DB_NAME || 'gaming',
  dbPassword: process.env.DB_PASSWORD || 'Manuel7Latorre',
  dbHost: process.env.DB_HOST || 'localhost',
  dbPort: process.env.DB_PORT || '3001',
};

export default config;
