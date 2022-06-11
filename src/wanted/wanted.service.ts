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
        
    }

    async updatePost(id: number, postDto: PostDto){

    }


    async deletePost(id: Number){

    }
}
