// config/db.ts
const productConfig = {
  port: '3307',
  host: '47.108.140.63',
  user: 'root',
  password: '1234',
  database: 'font', // 库名
  dialect: 'mysql',
  connectionLimit: 10, // 连接限制
};

const localConfig = {
  port: '3306',
  host: '47.108.140.63',
  user: 'root',
  password: '1234',
  database: 'font', // 库名
  dialect: 'mysql',
  connectionLimit: 10, // 连接限制
};

// 本地运行是没有 process.env.NODE_ENV 的，借此来区分[开发环境]和[生产环境]
const config = process.env.NODE_ENV ? productConfig : localConfig;

export default config;
