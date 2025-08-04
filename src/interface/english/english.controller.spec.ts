import { Test, TestingModule } from '@nestjs/testing';
import { EnglishController } from './english.controller';
import { EnglishService } from './english.service';

describe('EnglishController', () => {
  let controller: EnglishController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EnglishController],
      providers: [EnglishService],
    }).compile();

    controller = module.get<EnglishController>(EnglishController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
