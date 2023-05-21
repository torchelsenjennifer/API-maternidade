import { DataTypes } from "sequelize";
import { sequelize } from "../databases/conecta.js";

export const Baby = sequelize.define("baby", {
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

//Um bebe pertence a uma mãe
Baby.belongsTo(Mother, {
	foreignKey: {
	  name: "bebe_id",
	  allowNull: false,
	  onDelete: "RESTRICT",
	  onUpdate: "CASCADE",
	},
  });

//Uma mae pode ter muitos bebes
Mother.hasMany(Baby, {
	foreignKey: "bebe_id",
  });
