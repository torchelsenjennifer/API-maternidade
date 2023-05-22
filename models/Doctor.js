import { DataTypes } from "sequelize";
import { sequelize } from "../databases/conecta.js";

export const Doctor = sequelize.define("doctor", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nome: {
    type: DataTypes.STRING(30),
    allowNull: false,
  },
  especialidade: {
    type: DataTypes.STRING(30),
    allowNull: false,
  },
  crm: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  telefone: {
    type: DataTypes.STRING(20),
    allowNull: false,
  }
});
