import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';

dotenv.config();
const config: TypeOrmModuleOptions = {
  type: 'mysql',
  host: process.env.DB_HOST,
  port: 3306,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [],
  autoLoadEntities: true,
  charset: 'utf8mb4',
  synchronize: false, //첫 시작은 true, 나머지는 계속 false
  logging: true, //쿼리문 로그ß
  migrationsRun: false,
};

export = config;