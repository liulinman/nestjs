import { Module } from '@nestjs/common';
import { EnglishService } from './english.service';
import { EnglishController } from './english.controller';

@Module({
  controllers: [EnglishController],
  providers: [EnglishService],
})
export class EnglishModule {}
