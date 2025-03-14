import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RegexModule } from './interface/regex/regex.module';
import { MergeTableCellModule } from './interface/merge-table-cell/merge-table-cell.module';
import { UserModule } from './interface/user/user.module';

@Module({
  imports: [RegexModule, MergeTableCellModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
