import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Company } from 'src/entities/Company';
import { Post } from 'src/entities/Post';
import { SearchController } from './search.controller';
import { SearchService } from './search.service';

class MockPostRepository {}
class MockCompanyRepository {}

describe('SearchController', () => {
  let controller: SearchController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SearchController],
      providers: [
        SearchService,
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

    controller = module.get<SearchController>(SearchController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
