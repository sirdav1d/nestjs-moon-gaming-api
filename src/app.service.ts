import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getStatus(baseurl: string) {
    return {
      status: 'Server is running',
      docs: baseurl + '/api',
    };
  }
}
