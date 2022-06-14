import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WantedModule } from './wanted/wanted.module';
import { SearchModule } from './search/search.module';
import { ApplimentModule } from './appliment/appliment.module';
import * as config from '../ormConfig';

@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    WantedModule,
    SearchModule,
    ApplimentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
