import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { sequelizeModel } from './config';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log(`服务启动成功`);

  // 测试连接是否成功
  sequelizeModel
    .authenticate()
    .then(() => {
      console.log('连接数据库成功!');
    })
    .catch((error) => {
      console.error('连接数据库失败:', error);
    });

  // 全局启用 ValidationPipe
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // 只允许 DTO 中定义的属性
      forbidNonWhitelisted: true, // 禁止传入 DTO 中未定义的属性
      stopAtFirstError: true, // 遇到第一个验证错误就停止
    }),
  );

  await app.listen(3000);
}
bootstrap();
