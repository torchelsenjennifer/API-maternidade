import { DataTypes } from "sequelize";
import { sequelize } from "../databases/conecta.js";
import { Mother } from "./Mother.js"
import { Doctor } from "./Doctor.js";

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
    type: DataTypes.DECIMAL(4, 2),
    allowNull: false,
  },
  altura: {
    type: DataTypes.STRING(4, 2),
    allowNull: false,
  },
});

//Um bebe pertence a uma mãe
Baby.belongsTo(Mother, {
  foreignKey: {
    name: "mae_id",
    allowNull: false,
    onDelete: "RESTRICT",
    onUpdate: "CASCADE",
  },
});

//Uma mae pode ter muitos bebes
Mother.hasMany(Baby, {
  foreignKey: "mae_id",
});

// um bebe é atendindo por um médicos
Baby.belongsTo(Doctor, {
  foreignKey: {
    name: "medico_id",
    allowNull: false,
    onDelete: "RESTRICT",
    onUpdate: "CASCADE",
  },
});

// um medico atende varios bebes
Doctor.hasMany(Baby, {
  foreignKey: "medico_id",
});
