import { Controller, Get, Header, HttpCode } from '@nestjs/common';
import { PublisherService } from '../../services/publisher/publisher.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Publishers')
@Controller('publishers')
export class PublisherController {
  constructor(private publisherService: PublisherService) {}

  @Get()
  @HttpCode(200)
  @Header('Content-Type', 'application/json')
  @ApiResponse({
    status: 200,
    description: 'Returns list of publishers.',
  })
  getPublishers() {
    return this.publisherService.getPublishers();
  }
}
