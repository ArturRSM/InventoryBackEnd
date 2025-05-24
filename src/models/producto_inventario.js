const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/database.js");
const Inventario = require("./inventario.js");
const Producto = require("./producto.js");

const ProductoInventario = sequelize.define("producto_inventario", {
    id_inventario: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
            model: Inventario,
            key: "id",
        },
    },
    id_producto: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
            model: Producto,
            key: "id",
        },
    },
    cantidad: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    timestamps: false,
});

module.exports = ProductoInventario;