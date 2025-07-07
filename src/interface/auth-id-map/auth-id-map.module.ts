import { Module } from '@nestjs/common';
import { AuthIdMapService } from './auth-id-map.service';
import { AuthIdMapController } from './auth-id-map.controller';

@Module({
  controllers: [AuthIdMapController],
  providers: [AuthIdMapService],
})
export class AuthIdMapModule {}
