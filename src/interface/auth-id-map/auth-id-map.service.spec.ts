import { Test, TestingModule } from '@nestjs/testing';
import { AuthIdMapService } from './auth-id-map.service';

describe('AuthIdMapService', () => {
  let service: AuthIdMapService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthIdMapService],
    }).compile();

    service = module.get<AuthIdMapService>(AuthIdMapService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
