const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/database");
const Documento = require("./documento.js");
const Registro = require("./registro.js");

const Salida = sequelize.define('salida', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_documento: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Documento,
            key: 'id',
        }
    },
    id_registro: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Registro,
            key: 'id',
        }
    },
    fecha: {
        type: DataTypes.DATE,
        allowNull: false
    },
    unidades: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    ganancia: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    timestamps: false
});

module.exports = Salida;
