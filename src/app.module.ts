import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TerminusModule } from '@nestjs/terminus';
import { InvestModule } from './invest/invest.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import config from './config/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [
        'env/.env',
        `env/.env.${process.env.NODE_ENV}.local`,
        `env/.env.${process.env.NODE_ENV}`,
      ],
      load: [config],
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_SCHEMA,
      entities: [],
      synchronize: process.env.NODE_ENV === 'dev',
    }),
    TerminusModule,
    InvestModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
