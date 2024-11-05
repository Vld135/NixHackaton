import { Controller, Get, Header, Res } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('/healthz')
  getHealthzStatus() {
    return { status: 'OK' };
  }
}
