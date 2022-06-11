import { BadRequestException } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Company } from 'src/entities/Company';
import { Post } from 'src/entities/Post';
import { Repository } from 'typeorm';
import { PostDto } from './dto/post.dto';

@Injectable()
export class WantedService {
    constructor(
        @InjectRepository(Post)
        private postRepository: Repository<Post>,
        @InjectRepository(Company)
        private companyRepository: Repository<Company>,
    ){ }

    async getPostList(){

    }

    async createPost(postDto: PostDto){
        try{
            const company: Company = await this.companyRepository.findOne({
                where: {
                    name: postDto.company,
                },
            });
    
            // 없는 회사일 경우
            if(!company){
                throw new BadRequestException('No Exist Company');
            }
    
            const post: Post = new Post();
            post.company = company;
            post.nation = postDto.nation;
            post.region = postDto.region;
            post.position = postDto.position;
            post.bonus = postDto.bonus;
            post.content = postDto.content;
            post.skill = postDto.skill;
    
            await this.postRepository.save(post);
            return { success: true, post, };
        } catch(error){
            const errorMsg: any = error.response;
            return { success: false, errorMsg };
        }
        
    }

    async updatePost(id: number, postDto: PostDto){

    }


    async deletePost(id: Number){

    }
}
