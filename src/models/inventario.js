const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/database");
const Bodega = require("./bodega.js");
const Responsable = require("./responsable.js");

const Inventario = sequelize.define('inventario', {
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
    id_responsable: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Responsable,
            key: 'id',
        },
    },
    inicio: {
        type: DataTypes.DATE,
        allowNull: true
    },
    termino: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    cierre: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    notas: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
}, {
    timestamps: false
});

module.exports = Inventario;
