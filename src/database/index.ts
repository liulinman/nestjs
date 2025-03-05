import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('font', 'root', '1234', {
  host: '47.108.140.63', // 数据库所在主机
  dialect: 'mysql', // 数据库类型，MySQL
  logging: true, // 禁止 SQL 日志输出，可根据需要开启
});
