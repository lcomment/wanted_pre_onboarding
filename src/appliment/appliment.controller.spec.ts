import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Company } from 'src/entities/Company';
import { Post } from 'src/entities/Post';
import { User } from 'src/entities/User';
import { ApplimentController } from './appliment.controller';
import { ApplimentService } from './appliment.service';

class MockPostRepository {}
class MockCompanyRepository {}
class MockUserRepository {}

describe('ApplimentController', () => {
  let controller: ApplimentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ApplimentController],
      providers: [
        ApplimentService,
        {
          provide: getRepositoryToken(Post),
          useClass: MockPostRepository,
        },
        {
          provide: getRepositoryToken(Company),
          useClass: MockCompanyRepository,
        },
        {
          provide: getRepositoryToken(User),
          useClass: MockUserRepository,
        }
      ],
    }).compile();

    controller = module.get<ApplimentController>(ApplimentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
