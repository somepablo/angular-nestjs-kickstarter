import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ResponseWrapper } from './util/response.wrapper';

@Controller()
export class AppController {

  constructor(private readonly appService: AppService) {}

  @Get('hello')
  public getHello(): ResponseWrapper<string> {
    const hello = this.appService.getHello();
    return new ResponseWrapper(hello);
  }

}
