import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize("maternidade","root","",{
  dialect: 'mysql',
  host:"localhost",
  port:3306,
})