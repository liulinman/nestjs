import { Test, TestingModule } from '@nestjs/testing';
import { RegexController } from './regex.controller';
import { RegexService } from './regex.service';

describe('RegexController', () => {
  let controller: RegexController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RegexController],
      providers: [RegexService],
    }).compile();

    controller = module.get<RegexController>(RegexController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
