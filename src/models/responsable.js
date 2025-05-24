const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/database");

const Responsable = sequelize.define('responsable', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    rut: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    timestamps: false
});

module.exports = Responsable;
