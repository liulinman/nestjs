import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { AuthIdMapModule } from './interface/auth-id-map/auth-id-map.module';
import { EnglishModule } from './interface/english/english.module';

@Module({
  imports: [AuthIdMapModule, EnglishModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
