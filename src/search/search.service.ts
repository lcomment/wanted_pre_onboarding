import { BadRequestException } from '@nestjs/common';
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

    async getKeywordPost(keyword: string){
        try{
            let keywordPosts: Array<PostListDto> = [];

            // number(보너스 필드) 검색과 string(나머지 필드) 검색 구분 
            if('0' <= keyword.charAt(0) && keyword.charAt(0) <= '9'){
                const posts = await this.postRepository
                    .createQueryBuilder('posts')
                    .innerJoinAndSelect('posts.company', 'companys.name')
                    .where('posts.bonus >= :bonus', { bonus: keyword })
                    .orderBy('posts.bonus', 'DESC')
                    .getMany();
                
                if(posts.length === 0){
                    throw new BadRequestException('');
                }
                
                posts.forEach((post) => {
                    keywordPosts.push(new PostListDto(
                        post.id, 
                        post.company.name, 
                        post.nation,
                        post.region,
                        post.position, 
                        post.bonus, 
                        post.skill
                    ));
                });
                return { success: true, keywordPosts };
            }
            else{
                const posts = await this.postRepository
                    .createQueryBuilder('posts')
                    .innerJoinAndSelect('posts.company', 'companys.name')
                    .getMany();

                posts.forEach((post) => {
                    if(
                        post.company.name.includes(keyword) ||
                        post.nation.includes(keyword) ||
                        post.region.includes(keyword) ||
                        post.position.includes(keyword) ||
                        post.skill.includes(keyword)
                    ){
                        keywordPosts.push(new PostListDto(
                            post.id, 
                            post.company.name, 
                            post.nation,
                            post.region,
                            post.position, 
                            post.bonus, 
                            post.skill
                        ));
                    }
                });

                if(keywordPosts.length === 0){
                    throw new BadRequestException('');
                }

                return { success: true, keywordPosts };
            }
        } catch(error){
            const errorMsg: any = error.response;
            return { success: false, errorMsg }; 
        }
    }
}
