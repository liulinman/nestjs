import { Test, TestingModule } from '@nestjs/testing';
import { EnglishService } from './english.service';

describe('EnglishService', () => {
  let service: EnglishService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EnglishService],
    }).compile();

    service = module.get<EnglishService>(EnglishService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
