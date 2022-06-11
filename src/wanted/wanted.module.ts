import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Company } from 'src/entities/Company';
import { Post } from 'src/entities/Post';
import { WantedController } from './wanted.controller';
import { WantedService } from './wanted.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Post, Company,]),
  ],
  controllers: [WantedController],
  providers: [WantedService]
})
export class WantedModule {}
