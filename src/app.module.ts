import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RegexModule } from './regex/regex.module';
import { MergeTableCellModule } from './merge-table-cell/merge-table-cell.module';

@Module({
  imports: [RegexModule, MergeTableCellModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
