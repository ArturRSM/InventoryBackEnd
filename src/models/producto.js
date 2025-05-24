const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/database");

const Producto = sequelize.define('productos', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    precio: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    unidad_medida: {
        type: DataTypes.STRING,
        allowNull: false
    },
    identificacion: {
        type: DataTypes.STRING,
        allowNull: false
    },
    stock_critico: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    timestamps: false
});

module.exports = Producto;
