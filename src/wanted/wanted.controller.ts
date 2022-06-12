import { Get } from '@nestjs/common';
import { Body } from '@nestjs/common';
import { Put } from '@nestjs/common';
import { Delete } from '@nestjs/common';
import { Param } from '@nestjs/common';
import { Post } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
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
        description: 'CreatePostDto 참고',
        schema: {
            example: { 
                CreatePostDto: {
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
        @Body() postDto: CreatePostDto, 
    ){
        return await this.wantedService.createPost(postDto);
    }

    @ApiParam({
        name: 'id',
        description: '수정하고 싶은 채용공고 id',
        schema: {
            example: {
                id: 1,
            },
        },
    })
    @ApiBody({
        description: 'UpdatePostDto 참고',
        schema: {
            example: { 
                UpdatePostDto: {
                    company: '원티드',
                    region: '강남',
                    position: 'front-end',
                    content: '서류제출 → 코딩테스트 → 인터뷰 → 최종발표',
                    skill: 'react',
                }
            },
        },
    })
    @ApiResponse({
        description: 'Not Exist Company || Not Exist Post',
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
        description: 'Success to update',
        status: 200,
        schema: {
            example: { 
                success: true, 
                post: {
                    id: 1,
                    company: {
                        id: 4,
                        name: "원티드",
                    },
                    nation: "한국",
                    region: "강남",
                    position: "front-end",
                    bonus: 5_000_000,
                    content: '서류제출 → 코딩테스트 → 인터뷰 → 최종발표',
                    skill: 'react',
                } 
            },
        },
    })
    @ApiOperation({ summary: '요구사항2: 채용공고 수정' })
    @Put('/:id')
    async updatePost(
        @Param('id') id: number,
        @Body() postDto: UpdatePostDto, 
    ){
        return await this.wantedService.updatePost(id, postDto);
    }

    @ApiParam({
        name: 'id',
        description: '삭제하고 싶은 채용공고 id',
        schema: {
            example: {
                id: 1,
            },
        },
    })

    @ApiResponse({
        description: 'Not Exist Post',
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
        description: 'Success to update',
        status: 200,
        schema: {
            example: { 
                success: true, 
            },
        },
    })
    @ApiOperation({ summary: '요구사항3: 채용공고 삭제' })
    @Delete('')
    async deletePost(
        @Body('id') id: number,
    ){
        return await this.wantedService.deletePost(id);
    }
}
