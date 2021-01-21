import { Controller, Get, Header, HttpCode, Param, Post } from '@nestjs/common';
import { PublisherService } from '../../services/publisher/publisher.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { PublisherModel } from '../../models/publisher.model';

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

  @Get(':id')
  @HttpCode(200)
  @Header('Content-Type', 'application/json')
  @ApiResponse({
    status: 200,
    description: 'Returns an publisher by ID.',
  })
  getPublisher(@Param('id') id: number) {
    return undefined;
  }

  @Post()
  @HttpCode(204)
  @Header('Content-Type', 'application/json')
  @ApiResponse({
    status: 204,
    description: 'Returns created publisher.',
  })
  addPublisher(publisherModel: PublisherModel) {
    return undefined;
  }
}
