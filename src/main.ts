import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
const { Sequelize } = require('sequelize');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log(`服务启动成功`);
  // 创建 Sequelize 实例，连接到 MySQL 数据库
  const sequelize = new Sequelize('font', 'root', '1234', {
    host: '47.108.140.63', // 数据库所在主机
    dialect: 'mysql', // 数据库类型，MySQL
    logging: true, // 禁止 SQL 日志输出，可根据需要开启
  });

  // 测试连接是否成功
  sequelize
    .authenticate()
    .then(() => {
      console.log('连接数据库成功!');
    })
    .catch((error) => {
      console.error('连接数据库失败:', error);
    });

  await app.listen(3000);
}
bootstrap();
