const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/database");
const Documento = require("./documento.js");
const Registro = require("./registro.js");

const Merma = sequelize.define('mermas', {
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
    motivo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    unidades: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    costo: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    timestamps: false
});

module.exports = Merma;
