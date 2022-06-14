import { BadRequestException } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from 'src/entities/Post';
import { User } from 'src/entities/User';
import { Repository } from 'typeorm';
import { ApplyUserDto } from './dto/apply-user.dto';

@Injectable()
export class ApplimentService {
    constructor(
        @InjectRepository(Post)
        private postRepository: Repository<Post>,
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ){ }

    async applyPost(postId: number, userId: number){
        try{
            const post = await this.postRepository.findOne({
                where: { id: postId },
            });

            const user = await this.userRepository.findOne({
                where: { id: userId },
                relations: ['post']
            });

            if(!post || !user || user.post){
                throw new BadRequestException();
            }

            user.post = post;
            await this.userRepository.save(user);

            const ApplyUser = new ApplyUserDto(
                user.post.id,
                user.id,
                user.email,
            );

            return { success: true, ApplyUser }
        } catch(error){
            const errorMsg: any = error.response;
            return { success: false, errorMsg }; 
        }
    }
}
