import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TerminusModule } from '@nestjs/terminus';
import { InvestModule } from './invest/invest.module';

@Module({
  imports: [TerminusModule, InvestModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
