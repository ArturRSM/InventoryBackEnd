const { Sequelize } = require('sequelize');

exports.sequelize = new Sequelize ('remunelab' , 'root','password123.',{
    host: 'localhost',
    dialect: 'mysql',
    port: 3306,
    ssl : true,
    password: "password123."
})












