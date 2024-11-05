import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHealthzStatus(): { status: string } {
    return { status: 'OK'}
  }
}
