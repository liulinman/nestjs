import { Sequelize } from 'sequelize';
import { config } from './db';

export const sequelizeModel = new Sequelize(config);
