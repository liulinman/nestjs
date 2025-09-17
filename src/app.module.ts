import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { AuthIdMapModule } from './interface/auth-id-map/auth-id-map.module';
import { EnglishModule } from './interface/english/english.module';
import { OssModule } from './interface/oss/oss.module';

@Module({
  imports: [AuthIdMapModule, EnglishModule, OssModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
