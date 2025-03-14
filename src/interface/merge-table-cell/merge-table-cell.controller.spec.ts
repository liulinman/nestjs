import { Test, TestingModule } from '@nestjs/testing';
import { MergeTableCellController } from './merge-table-cell.controller';
import { MergeTableCellService } from './merge-table-cell.service';

describe('MergeTableCellController', () => {
  let controller: MergeTableCellController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MergeTableCellController],
      providers: [MergeTableCellService],
    }).compile();

    controller = module.get<MergeTableCellController>(MergeTableCellController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
