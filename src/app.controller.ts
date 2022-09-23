import { Controller, Get, Req } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Request } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiTags('Status')
  @Get()
  getStatus(@Req() req: Request) {
    const baseurl = req.protocol + '://' + req.get('host');
    return this.appService.getStatus(baseurl);
  }
}
