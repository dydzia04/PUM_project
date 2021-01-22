import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

/**
 * Main app controller for root route
 */
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  /**
   * Function returning hello world
   */
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
