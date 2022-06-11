import { Get } from '@nestjs/common';
import { Body } from '@nestjs/common';
import { Put } from '@nestjs/common';
import { Delete } from '@nestjs/common';
import { Param } from '@nestjs/common';
import { Post } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { identity } from 'rxjs';
import { PostDto } from './dto/post.dto';
import { WantedService } from './wanted.service';

@ApiTags('채용 공고 CRUD')
@Controller('wanted')
export class WantedController {
    constructor(private wantedService: WantedService){ }

    @Get('')
    async getPostList(){
        return await this.wantedService.getPostList();
    }

    @Post('')
    async createPost(
        @Body() postDto: PostDto, 
    ){
        return await this.wantedService.createPost(postDto);
    }

    @Put('/:id')
    async updatePost(
        @Param('id') id: number,
        @Body() postDto: PostDto, 
        // @Body('nation') nation: string,
        // @Body('region') region: string,
        // @Body('position') position: string,
        // @Body('bonus') bonus: number,
        // @Body('content') contentL: string,
        // @Body('skill') skill: string,
    ){
        return await this.wantedService.updatePost(id, postDto);
    }

    @Delete('')
    async deletePost(
        @Body('id') id: number,
    ){

    }
}
