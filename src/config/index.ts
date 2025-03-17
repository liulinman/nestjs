import { Sequelize } from 'sequelize';
import { config } from './db/db';

export const sequelizeModel = new Sequelize(config);
