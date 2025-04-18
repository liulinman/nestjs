import { Module } from '@nestjs/common';
import { HookService } from './hook.service';
import { HookController } from './hook.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [HookController],
  providers: [HookService],
})
export class HookModule {}
