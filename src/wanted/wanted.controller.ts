import { Get } from '@nestjs/common';
import { Body } from '@nestjs/common';
import { Put } from '@nestjs/common';
import { Delete } from '@nestjs/common';
import { Param } from '@nestjs/common';
import { Post } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PostDto } from './dto/post.dto';
import { WantedService } from './wanted.service';

@ApiTags('채용 공고 CRUD')
@Controller('wanted/post')
export class WantedController {
    constructor(private wantedService: WantedService){ }

    @Get('')
    async getPostList(){
        return await this.wantedService.getPostList();
    }

    @ApiBody({
        description: 'PostDto 참고',
        schema: {
            example: { 
                PostDto: {
                    company: '카카오',
                    nation: '한국',
                    region: '판교',
                    position: 'back-end',
                    bonus: 5_000_000,
                    content: '1차 코딩테스트 → 서류제출 → 2차 코딩테스트 → 인터뷰 → 최종발표',
                    skill: 'spring',
                }
            },
        },
    })
    @ApiResponse({
        description: 'Not Exist Company',
        status: 400,
        schema: {
            example: { 
                success: false, 
                errorMsg: {
                    statusCode: 400,
                    message: "No Exist Company",
                    error: "Bad Request",    
                } 
            },
        },
    })
    @ApiResponse({
        description: 'Success to register',
        status: 201,
        schema: {
            example: { 
                success: true, 
                post: {
                    id: 1,
                    company: {
                        id: 1,
                        name: "카카오",
                    },
                    nation: "한국",
                    region: "판교",
                    position: "back-end",
                    bonus: 5_000_000,
                    content: '1차 코딩테스트 → 서류제출 → 2차 코딩테스트 → 인터뷰 → 최종발표',
                    skill: 'spring',
                } 
            },
        },
    })
    @ApiOperation({ summary: '요구사항1: 채용공고 등록' })
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
