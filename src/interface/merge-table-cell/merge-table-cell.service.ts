import { Injectable } from '@nestjs/common';
import { CreateMergeTableCellDto } from './dto/create-merge-table-cell.dto';
import { UpdateMergeTableCellDto } from './dto/update-merge-table-cell.dto';

@Injectable()
export class MergeTableCellService {
  create(createMergeTableCellDto: CreateMergeTableCellDto) {
    return 'This action adds a new mergeTableCell';
  }

  findAll() {
    return [
      {
        factory: '工厂A',
        workStation: [],
      },
    ];
  }

  findOne(id: number) {
    return `This action returns a #${id} mergeTableCell`;
  }

  update(id: number, updateMergeTableCellDto: UpdateMergeTableCellDto) {
    return `This action updates a #${id} mergeTableCell`;
  }

  remove(id: number) {
    return `This action removes a #${id} mergeTableCell`;
  }
}
