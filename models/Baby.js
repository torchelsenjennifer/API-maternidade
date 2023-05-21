import { DataTypes } from "sequelize";
import { sequelize } from "../databases/conecta.js";

export const Baby = sequelize.define("baby", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  data: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  peso: {
    type: DataTypes.DECIMAL(4,2),
    allowNull: false,
  },
  altura: {
    type: DataTypes.STRING(4,2),
    allowNull: false,
  },
});
