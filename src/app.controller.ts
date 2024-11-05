import { Controller, Get, Header } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/healthz')
  @Header('content-type', 'application/json')
  getHello(): { status: string } {
    return this.appService.getHealthzStatus();
  }
}
