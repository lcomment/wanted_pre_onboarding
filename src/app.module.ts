import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as config from '../ormConfig';

@Module({
  imports: [
    TypeOrmModule.forRoot(config),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
