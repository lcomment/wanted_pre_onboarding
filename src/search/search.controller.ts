import { Get } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { SearchService } from './search.service';

@ApiTags('wanted/post/search')
@Controller('wanted/post/search')
export class SearchController {
    constructor(private searchService: SearchService){ }

    @ApiResponse({
        description: 'Error',
        status: 400,
        schema: {
            example: { 
                success: false, 
            },
        },
    })
    @ApiResponse({
        description: 'Success',
        status: 200,
        schema: {
            example: { 
                success: true,
                postList: [
                    {
                        id: 2,
                        company: '카카오페이',
                        nation: '한국',
                        region: '판교',
                        position: 'back-end',
                        bonus: 5_000_000,
                        skill: 'spring',
                    },
                    {
                        id: 3,
                        company: '원티드',
                        nation: '한국',
                        region: '강남',
                        position: 'front-end',
                        bonus: 5_000_000,
                        skill: 'spring',
                    },
                    {
                        id: 4,
                        company: '라인',
                        nation: '일본',
                        region: '도쿄',
                        position: 'back-end',
                        bonus: 1_000_000,
                        skill: 'ruby',
                    }
                ] 
            },
        },
    })
    @ApiOperation({ summary: '요구사항4-1: 채용공고 목록 가져오기' })
    @Get('')
    async getPostList(){
        return await this.searchService.getPostList();
    }
}
