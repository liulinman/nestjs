import { PartialType } from '@nestjs/mapped-types';
import { CreateMergeTableCellDto } from './create-merge-table-cell.dto';

export class UpdateMergeTableCellDto extends PartialType(CreateMergeTableCellDto) {}
