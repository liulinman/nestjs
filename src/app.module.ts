/*
 * @Author: yifeng 2108546503@qq.com
 * @Date: 2025-05-30 11:15:30
 * @LastEditors: yifeng 2108546503@qq.com
 * @LastEditTime: 2025-07-07 10:37:27
 * @FilePath: /nestjs/src/app.module.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RegexModule } from './interface/regex/regex.module';
import { MergeTableCellModule } from './interface/merge-table-cell/merge-table-cell.module';
import { UserModule } from './interface/user/user.module';
import { HookModule } from './interface/hook/hook.module';
import { AuthIdMapModule } from './interface/auth-id-map/auth-id-map.module';

@Module({
  imports: [
    RegexModule,
    MergeTableCellModule,
    UserModule,
    HookModule,
    AuthIdMapModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
