import { Test, TestingModule } from '@nestjs/testing';
import { ApplimentService } from './appliment.service';

describe('ApplimentService', () => {
  let service: ApplimentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApplimentService],
    }).compile();

    service = module.get<ApplimentService>(ApplimentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
