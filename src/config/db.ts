import { DBConfig } from './config.type';

// config/db.ts
const productConfig: DBConfig = {
  port: 3307, // 端口号
  host: '47.108.140.63',
  username: 'root', // 数据库用户名
  password: '1234',
  database: 'font', // 使用的数据库
  dialect: 'mysql', // 数据库类型
  logging: true, // 打印 SQL 查询日志
};

const localConfig: DBConfig = {
  port: 3306, // 端口号
  host: '47.108.140.63',
  username: 'root', // 数据库用户名
  password: '1234',
  database: 'font', // 使用的数据库
  dialect: 'mysql', // 数据库类型
  logging: true, // 打印 SQL 查询日志
};

// 本地运行是没有 process.env.NODE_ENV 的，借此来区分[开发环境]和[生产环境]
export const config = process.env.NODE_ENV ? productConfig : localConfig;
