import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MergeTableCellService } from './merge-table-cell.service';
import { CreateMergeTableCellDto } from './dto/create-merge-table-cell.dto';
import { UpdateMergeTableCellDto } from './dto/update-merge-table-cell.dto';

@Controller('mergeTablecell')
export class MergeTableCellController {
  constructor(private readonly mergeTableCellService: MergeTableCellService) {}

  @Post()
  create(@Body() createMergeTableCellDto: CreateMergeTableCellDto) {
    return this.mergeTableCellService.create(createMergeTableCellDto);
  }

  @Get()
  findAll() {
    return this.mergeTableCellService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mergeTableCellService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateMergeTableCellDto: UpdateMergeTableCellDto,
  ) {
    return this.mergeTableCellService.update(+id, updateMergeTableCellDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mergeTableCellService.remove(+id);
  }
}
