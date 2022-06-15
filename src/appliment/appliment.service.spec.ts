import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Company } from 'src/entities/Company';
import { Post } from 'src/entities/Post';
import { User } from 'src/entities/User';
import { ApplimentService } from './appliment.service';

class MockPostRepository {}
class MockCompanyRepository {}
class MockUserRepository {}

describe('ApplimentService', () => {
  let service: ApplimentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
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

    service = module.get<ApplimentService>(ApplimentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
