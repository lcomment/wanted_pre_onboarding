import { Post } from '@nestjs/common';
import { Body } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ApplimentService } from './appliment.service';

@ApiTags('채용 공고 지원')
@Controller('wanted/post/appliment')
export class ApplimentController {
    constructor(private applimentService: ApplimentService) {}

    @ApiBody({
        description: '유저와 채용공고 id',
        schema: {
            example: {
                userId: 5,
                postId: 6,
            }
        }
    })
    @ApiResponse({
        description: 'Fail (잘못된 채용공고 id 또는 유저 id이거나 이미 지원한 경우)',
        status: 400,
        schema: {
            example: {
                success: false,
                errorMsg: {
                    statusCode: 400,
                    message: 'Bad Request'
                }
            }
        }
    })
    @ApiResponse({
        description: 'Success',
        status: 201,
        schema: {
            example: {
                success: true,
                ApplyUser: {
                    postid: 6,
                    userid: 5,
                    email: 'kwon@wanted.com',
                }
            }
        }
    })
    @ApiOperation({ summary: '요구사항6: 채용공고 지원하기'})
    @Post('')
    async applyPost(
        @Body('postId') postId: number,
        @Body('userId') userId: number,
    ){
        return  await this.applimentService.applyPost(postId, userId);
    }
}
