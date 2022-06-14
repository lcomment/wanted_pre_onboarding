import { Test, TestingModule } from '@nestjs/testing';
import { ApplimentController } from './appliment.controller';

describe('ApplimentController', () => {
  let controller: ApplimentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ApplimentController],
    }).compile();

    controller = module.get<ApplimentController>(ApplimentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
