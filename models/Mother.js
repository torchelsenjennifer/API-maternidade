import { DataTypes } from "sequelize";
import { sequelize } from "../databases/conecta.js";

export const Mother = sequelize.define("mother", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nome: {
    type: DataTypes.STRING(30),
    allowNull: false,
  },
  endereco: {
    type: DataTypes.STRING(30),
    allowNull: false,
  },
  telefone: {
    type: DataTypes.STRING(30),
    allowNull: false,
  },
  dataNacimento: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});