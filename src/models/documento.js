const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/database");
const Bodega = require("./bodega.js");

const Documento = sequelize.define('documentos', {
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
        }
    },
    fecha: {
        type: DataTypes.DATE,
        allowNull: false
    },
    responsable: {
        type: DataTypes.STRING,
        allowNull: false
    },
    n_documento: {
        type: DataTypes.STRING,
        allowNull: false
    },
    neto: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    iva: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    tipo: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: false
});

module.exports = Documento;
