import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TerminusModule } from '@nestjs/terminus';
import { InvestModule } from './invest/invest.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [
        'configs/.env',
        `configs/.env.${process.env.NODE_ENV}.local`,
        `configs/.env.${process.env.NODE_ENV}`,
      ],
    }),
    TerminusModule,
    InvestModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
