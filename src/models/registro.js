const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/database");
const Bodega = require("./bodega.js");
const Producto = require("./producto.js");

const Registro = sequelize.define('registros', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_bodega: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Bodega,
            key: 'id',
        },
    },
    id_producto: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Producto,
            key: 'id',
        },
    },
    vencimiento: {
        type: DataTypes.DATE,
        allowNull: true
    },
    registro: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    rfid: {
        type: DataTypes.STRING,
        allowNull: true
    },
    activo: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    },
    unidades: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    timestamps: false
});

module.exports = Registro;
