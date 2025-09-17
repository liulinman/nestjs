/*
 * @Author: yifeng 2108546503@qq.com
 * @Date: 2025-08-04 09:56:21
 * @LastEditors: yifeng 2108546503@qq.com
 * @LastEditTime: 2025-09-17 17:33:21
 * @FilePath: /nestjs/src/app.module.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%B
 */
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
