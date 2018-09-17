'use strict';

const dotenv = require('dotenv');

dotenv.load({ silent: true });

module.exports = {
  development: {
    host: process.env['DATABASE_HOST'] || 'localhost',
    port: process.env['DATABASE_PORT'] || 4010,
    username: process.env['DATABASE_USERNAME'] || '',
    password: process.env['DATABASE_PASSWORD'] || '',
    database: process.env['DATABASE_NAME'] || '',
    dialect: 'mysql'
  },
  test: {

  },
  production: {
    host: process.env['DATABASE_HOST'] || 'localhost',
    port: process.env['DATABASE_PORT'] || 5432,
    username: process.env['DATABASE_USERNAME'] || '',
    password: process.env['DATABASE_PASSWORD'] || '',
    database: process.env['DATABASE_NAME'] || '',
    dialect: 'postgres'
  } 
};