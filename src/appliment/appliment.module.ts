import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from 'src/entities/Post';
import { User } from 'src/entities/User';
import { ApplimentController } from './appliment.controller';
import { ApplimentService } from './appliment.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Post, User,]),
  ],
  controllers: [ApplimentController],
  providers: [ApplimentService]
})
export class ApplimentModule {}
