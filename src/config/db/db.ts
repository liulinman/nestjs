/*
 * @Author: yifeng 2108546503@qq.com
 * @Date: 2025-08-05 19:20:35
 * @LastEditors: yifeng 2108546503@qq.com
 * @LastEditTime: 2025-08-06 00:05:53
 * @FilePath: \nestjs\src\config\db\db.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { DBConfig } from './config.type';

// config/db.ts
const productConfig: DBConfig = {
  port: 3308, // 端口号
  host: '47.108.140.63',
  username: 'root', // 数据库用户名
  password: '1234',
  database: 'font', // 使用的数据库
  dialect: 'mysql', // 数据库类型
  logging: true, // 打印 SQL 查询日志
  timezone: "+00:00",
  // dialectOptions:{
  //   dateStrings:true,
  //   typeCast:true
  // }
};

const localConfig: DBConfig = {
  port: 3308, // 端口号
  host: '47.108.140.63',
  username: 'root', // 数据库用户名
  password: '1234',
  database: 'font', // 使用的数据库
  dialect: 'mysql', // 数据库类型
  logging: true, // 打印 SQL 查询日志
  timezone: "+00:00",
  // dialectOptions:{
  //   dateStrings:true,
  //   typeCast:true
  // }
};

// 本地运行是没有 process.env.NODE_ENV 的，借此来区分[开发环境]和[生产环境]
// 也可以显示设置NODE_ENV的值，在package.json中
/**
 * {
  "scripts": {
    "start": "NODE_ENV=development node app.js",  // 设置为开发环境
    "build": "NODE_ENV=production node app.js"    // 设置为生产环境
  }
}
 * 
 */
export const config = process.env.NODE_ENV ? productConfig : localConfig;
