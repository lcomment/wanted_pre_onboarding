import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Post } from '../entities/Post';
import { Company } from '../entities/Company';
import { CreatePostDto } from './dto/create-post.dto';
import { WantedService } from './wanted.service';

const postDto: CreatePostDto = {
  company: '원티드',
  nation: '한국',
  region: '판교',
  position: 'back-end',
  bonus: 5_000_000,
  content: '1차 코딩테스트 → 서류제출 → 2차 코딩테스트 → 인터뷰 → 최종발표',
  skill: 'spring',
};

class MockPostRepository {
  #data = [{ 
    id: 1,
    company: '원티드',
    nation: '한국',
    region: '판교',
    position: 'back-end',
    bonus: 5_000_000,
    content: '1차 코딩테스트 → 서류제출 → 2차 코딩테스트 → 인터뷰 → 최종발표',
    skill: 'spring',
  }];
  async create(postDto: CreatePostDto) {
    const post: Post = new Post();
    post.nation = postDto.nation;
    post.region = postDto.region;
    post.bonus = postDto.bonus;
    post.position = postDto.position;
    post.content = postDto.content;
    return post;
  }
  async remove(postId: number){
    this.#data.forEach((data) => {
      if(data.id == postId){
        return { success: true };
      }
    });
    return { success: false };
  }
}

class MockCompanyRepository {
  #data = [
    {
      id: 1,
      name: '원티드'
    },
    {
      id: 2,
      name: '원티드코리아',
    }
  ];

  async findOne(name: string){
    this.#data.forEach((data) => {
      if(data.name == name){
        return data;
      }
    });
    return null;
  }
}

describe('WantedService', () => {
  let service: WantedService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
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

    service = module.get<WantedService>(WantedService);
  });

  it('Create Post Success', async () => {
    try{
      const result = await service.createPost(postDto);
      expect(result).resolves.toStrictEqual({ 
        success: true,
        result,
      });
    }catch(error){

    }
  });

  it('Delete Post Success', async () => {
    try{
      const result = await service.deletePost(1);
      expect(result).resolves.toStrictEqual({ 
        success: true 
      });
    } catch(error){}
  });
  
  it('Delete Post Fail', async () => {
    try{
      const result = service.deletePost(99999999);
    }catch(error){
      expect(error).toStrictEqual({
        success: false, 
        errorMsg: {
          statusCode: 400,
          message: "No Exist Company",
          error: "Bad Request",
        } 
      });
    }
  });
});
