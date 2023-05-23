// import { Sequelize } from 'sequelize';
// import { Mother } from "../models/Mother";
// import { Doctor } from "../models/Doctor";
import { Baby } from "../models/Baby.js";
import { Doctor } from "../models/Doctor.js";
import { Mother } from "../models/Mother.js";

export const bebeIndex = async (req, res) => {
  try {
    const bebe = await Baby.findAll(
		{include: [Mother, Doctor]}
	);
    //{ include: Brand  }
    res.status(200).json(bebe);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const bebeCreate = async (req, res) => {
  const { nome, data, peso, altura, mae_id, medico_id } = req.body;

  if (!nome || !data || !peso || !altura || !mae_id || !medico_id) {
    res.status(400).json({
      id: 0,
      msg: "Erro...Informe os dados.",
    });
    return;
  }

  try {
    const bebe = await Baby.create({
      nome,
      data,
      peso,
      altura,
      mae_id,
      medico_id,
    });
    res.status(201).json(bebe);
  } catch (error) {
    res.status(400).send(error);
  }
};
