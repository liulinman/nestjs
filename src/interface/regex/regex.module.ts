import { Module } from '@nestjs/common';
import { RegexService } from './regex.service';
import { RegexController } from './regex.controller';

@Module({
  controllers: [RegexController],
  providers: [RegexService],
})
export class RegexModule {}
