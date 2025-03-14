import { Module } from '@nestjs/common';
import { MergeTableCellService } from './merge-table-cell.service';
import { MergeTableCellController } from './merge-table-cell.controller';

@Module({
  controllers: [MergeTableCellController],
  providers: [MergeTableCellService],
})
export class MergeTableCellModule {}
