import { Test, TestingModule } from '@nestjs/testing';
import { MergeTableCellService } from './merge-table-cell.service';

describe('MergeTableCellService', () => {
  let service: MergeTableCellService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MergeTableCellService],
    }).compile();

    service = module.get<MergeTableCellService>(MergeTableCellService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
