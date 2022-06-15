import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Company } from 'src/entities/Company';
import { Post } from 'src/entities/Post';
import { WantedController } from './wanted.controller';
import { WantedService } from './wanted.service';

class MockPostRepository {

}

class MockCompanyRepository {

}

describe('WantedController', () => {
  let controller: WantedController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WantedController],
      providers: [
        WantedService, 
        {
          provide: getRepositoryToken(Post),
          useClass: MockPostRepository,
        },
        {
          provide: getRepositoryToken(Company),
          useClass: MockCompanyRepository,
        }
      ],
    }).compile();

    controller = module.get<WantedController>(WantedController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
