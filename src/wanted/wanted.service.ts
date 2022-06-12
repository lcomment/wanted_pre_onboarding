import { BadRequestException } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Company } from 'src/entities/Company';
import { Post } from 'src/entities/Post';
import { Repository } from 'typeorm';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

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

    async createPost(postDto: CreatePostDto){
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

    async updatePost(id: number, postDto: UpdatePostDto){
        try{
            const post = await this.postRepository.findOne({
                where: { id: id },
            });

            if(!post){
                throw new BadRequestException('No Exist Post');
            }
            
            if(postDto.company){
                const company = await this.companyRepository.findOne({
                    where: { name: postDto.company, },
                });

                if(!company){
                    throw new BadRequestException('Wrong Data: Company');
                }
                post.company = company;
                console.log('change company', post.company);
            }

            post.nation = (postDto.nation != null) ? postDto.nation : post.nation;
            post.region = (postDto.region != null) ? postDto.region : post.region;
            post.position = (postDto.position != null) ? postDto.position : post.position;
            post.bonus = (postDto.bonus != post.bonus) ? postDto.bonus : post.bonus;
            post.content = (postDto.content != null) ? postDto.content : post.content;
            post.skill = (postDto.skill != null) ? postDto.skill : post.skill;

            await this.postRepository.save(post);
            return { success: true, post, };
        } catch(error){
            const errorMsg: any = error.response;
            return { success: false, errorMsg };
        }
    }

    async deletePost(id: number){
        try{
            const post = await this.postRepository.findOne({
                where: { id: id},
            });

            if(!post){
                throw new BadRequestException('Not Exist Post');
            }

            await this.postRepository.remove(post);
            return { success: true };
        }catch(error){
            const errorMsg: any = error.response;
            return { success: false, errorMsg }; 
        }
    }
}