import { Test, TestingModule } from '@nestjs/testing';
import { AuthIdMapController } from './auth-id-map.controller';
import { AuthIdMapService } from './auth-id-map.service';

describe('AuthIdMapController', () => {
  let controller: AuthIdMapController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthIdMapController],
      providers: [AuthIdMapService],
    }).compile();

    controller = module.get<AuthIdMapController>(AuthIdMapController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
