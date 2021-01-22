import { Injectable } from '@nestjs/common';

/**
 * Main app service for app controller
 */
@Injectable()
export class AppService {
  /**
   * Function returning 'Hello world'
   */
  getHello(): string {
    return 'Hello World!';
  }
}
