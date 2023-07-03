import { Controller, Get } from '@nestjs/common';
import { HealthCheck, HealthCheckService } from '@nestjs/terminus';

@Controller()
export class AppController {
  constructor(private healthCheckService: HealthCheckService) {}

  @Get('/ping')
  @HealthCheck()
  getPing() {
    return process.env.NODE_ENV;
  }
}
