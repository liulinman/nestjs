import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { sequelizeModel } from './config';
import { ValidationPipe } from '@nestjs/common';
import { InterceptorInterceptor } from './interceptor/interceptor.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 测试连接是否成功
  sequelizeModel
    .authenticate()
    .then(() => {
      console.log('连接数据库成功!');
    })
    .catch((error) => {
      console.error('连接数据库失败:', error);
    });

  // 配置跨域
  app.enableCors({
    origin: '*', // 允许所有的来源
  });

  // 注册全局拦截器
  app.useGlobalInterceptors(new InterceptorInterceptor());

  // 全局启用 ValidationPipe
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // 只允许 DTO 中定义的属性
      forbidNonWhitelisted: true, // 禁止传入 DTO 中未定义的属性
      stopAtFirstError: true, // 遇到第一个验证错误就停止
    }),
  );

  await app.listen(3000);
  console.log(`服务启动成功`);
}
bootstrap();
