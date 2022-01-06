import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get()
  getLista(): string[] {
    return this.appService.getLista();
  }

  @Get()
  getListaObj(): object[] {
    return this.appService.getLista2();
  }
}
