import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Company } from 'src/entities/Company';
import { Post } from 'src/entities/Post';
import { Repository } from 'typeorm';
import { PostListDto } from './dto/post-list.dto';

@Injectable()
export class SearchService {
    constructor(
        @InjectRepository(Post)
        private postRepository: Repository<Post>,
        @InjectRepository(Company)
        private companyRepository: Repository<Company>,
    ){}

    async getPostList(){
        try{
            const posts = await this.postRepository
                .createQueryBuilder('posts')
                .innerJoinAndSelect('posts.company', 'companys.name')
                .getMany();
            //console.log('q');
            let postList: Array<PostListDto> = [];
            
            posts.forEach((post) => {
                postList.push(new PostListDto(
                    post.id, 
                    post.company.name, 
                    post.nation,
                    post.region,
                    post.position, 
                    post.bonus, 
                    post.skill
                ));
            })

            return { success: true, postList };
        } catch(error){
            return { success: false };
        }
    }
}
