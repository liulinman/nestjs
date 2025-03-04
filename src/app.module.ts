import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RegexModule } from './regex/regex.module';

@Module({
  imports: [RegexModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
