import { Get } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { SearchService } from './search.service';

@ApiTags('wanted/post/search')
@Controller('wanted/post/search')
export class SearchController {
    constructor(private searchService: SearchService){ }

    @ApiOperation({ summary: '요구사항4-1: 채용공고 목록 가져오기' })
    @Get('')
    async getPostList(){
        return await this.searchService.getPostList();
    }
}
