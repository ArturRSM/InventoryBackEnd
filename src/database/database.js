const { Sequelize } = require('sequelize');
require('dotenv').config();

const host = process.env.HOST;
const db = process.env.DB;
const db_user = process.env.DB_USER;
const db_pass = process.env.DB_PASS;
const db_port = process.env.DB_PORT;
const db_type = process.env.DB_TYPE;



exports.sequelize = new Sequelize (db , db_user,db_pass,{
    host: host,
    dialect: db_type,
    port: db_port,
    ssl : true,
    password: db_pass
})