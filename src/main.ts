import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log(`服务启动成功`);

  await app.listen(3000);
}
bootstrap();
