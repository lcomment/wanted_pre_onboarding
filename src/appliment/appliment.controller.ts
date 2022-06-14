import { Post } from '@nestjs/common';
import { Body } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ApplimentService } from './appliment.service';

@ApiTags('채용 공고 지원')
@Controller('wanted/post/appliment')
export class ApplimentController {
    constructor(private applimentService: ApplimentService) {}

    @Post('')
    async applyPost(
        @Body('postId') postId: number,
        @Body('userId') userId: number,
    ){
        return  await this.applimentService.applyPost(postId, userId);
    }
}
